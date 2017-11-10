---
layout: post
title:  "Tilted Axisymmetric Magnetic Geometries, Reconstructed in Spherical Harmonic Components"
date:   2017-11-10 11:00:00 +0000
categories: jekyll update
---
---
Assets used for this project:
* Python
* pySHTOOLS, for the spherical harmonic tools: [link](https://shtools.oca.eu/shtools/index.html)
	* the subsequent python dependencies
* Matplotlib, for visualisations: [link](https://matplotlib.org/index.html)

NOTE: I use the spherical harmonic convention of storing the negative m solutions in the imaginary part of the positive solution. Therfore my index runs from 0 &lt; m &lt; l.

---

### The Question:
A __tilted dipole__ can be constructed from its spherical harmonic components, as each component represents a dipole aligned with the x, y, or z-axis.

<img src="/images/sph_harm/dipole_all.png" height='178' align="middle">

It is not as obvious how tilted geometries can be constructed for the higher order spherical harmonic modes. The various m's produce starkly different arrangements on the surface, unlike the dipole. Here we take interest in the next simplest modes, the quadrupole and octupole:

<img src="/images/sph_harm/quadrupole_all.png" height='340' align="middle">

<img src="/images/sph_harm/octupole_all.png" height='360' align="middle">

---

### Method

To find the combinations of harmonics that comprise the tilted higher order geometries, we artificially tilt a given axisymmetric (m=0) geometry. Then recover the spherical harmonic components using pySHTOOLS. e.g.

{% highlight ruby %}
#INPUTS#
L= 1,2, or 3, for dipole, quadrupole or octupole.
angle_stepsize= is the size of the sampling between 0 and 180 degrees.
########

for TH_prime in np.arange(0,np.pi,angle_stepsize): #the angle change in the theta direction.
    PHI_prime=0 #fix the other angle, phi.

    # CREATE A GRID IN THETA AND PHI ##########################
    Theta = np.linspace(0,np.pi,300)
    Phi = np.linspace(-np.pi,np.pi,300)
    PHI, TH = np.meshgrid(Phi,Theta)
    ###########################################################

    # CREATE A GRID FOR THE ROTATED COORDINATES ###############
    TH_rot=np.empty_like(TH)
    PHI_rot=np.empty_like(PHI)
    ###########################################################

    # PERFORM THE COORDINATE TRANSFORMATION ON THE OLD GRID ###
    for i in range(0,len(Theta)):
        for j in range(0,len(Phi)):
            old_points = np.array([np.sin(TH[i,j])*np.cos(PHI[i,j]),np.sin(TH[i,j])*np.sin(PHI[i,j]),np.cos(TH[i,j])])
            old_axis = np.array([np.sin(-np.pi/2)*np.cos(0),np.sin(-np.pi/2)*np.sin(0),np.cos(-np.pi/2)])
            transform = np.cos(TH_prime)*old_points+np.sin(TH_prime)*np.cross(old_axis,old_points)+np.dot(old_axis,old_points)*(1-np.cos(TH_prime))*old_axis
            TH_rot[i,j] = np.pi-np.arctan2(np.sqrt(transform[0:1]**2+transform[1:2]**2),transform[2:3])
            PHI_rot[i,j] = np.arctan2(transform[1:2],transform[0:1])
    ###########################################################

    SPH_HARMS =  np.real(sp.sph_harm(0,L,PHI_rot,TH_rot)) #calculate the value of the spherical harmonic in the new grid

    # INTERPOLATE THE VALUES BACK ONTO AN EQUALLY SAMPLE GRID #
    latitude=np.linspace(0,np.pi,400)
    longitude=np.linspace(-np.pi,np.pi,400)
    LAT, LONG = np.meshgrid(latitude,longitude)
    intepolate_grid=griddata((TH.flatten(),PHI.flatten()),SPH_HARMS.T.flatten(), (LAT,LONG), method='cubic')
    SPH_HARMS=np.nan_to_num(intepolate_grid) #remove and nans
    ###########################################################

    Run phSHTOOLS to decompose the harmonics.

    And plot result.
    
{% endhighlight %}

---

### Results

The code rotates the coordinate system of the grid, shown in the right-most panel of each figure below. The effect this has on the spherical harmonic decomposition is examined in the middle panel, where the power in each harmonic is measured. During the whole run, the code revolves the geometry by 180 degrees, the values of the coefficients required to construct the tilted geometry are plotted in the left panel i.e. for a given l, Tilted(m=0) = coeff * (m=0) + coeff * Re(m=1) + coeff * Im(m=1) +...etc.

# Dipole
<video height="240" autoplay='' loop='' align='center'>
  <source src="/images/sph_harm/Dipole.mp4" type="video/mp4">
</video>

As the axisymmetric mode (m=0) loses strength, the equatorial (m=1) gains strength. A simple result, which seems obvious.

# Quadrupole
<video height="240" autoplay='' loop='' align='center'>
  <source src="/images/sph_harm/Quadrupole.mp4" type="video/mp4">
</video>

The axisymmetric mode (m=0) and the m=2 mode rise and fall together, with the m=1 mode out of phase.

# Octupole
<video height="240" autoplay='' loop='' align='center'>
  <source src="/images/sph_harm/Octupole.mp4" type="video/mp4">
</video>

A much more complicated behaviour is shown here. The m=1 and m=3 modes have symmetric functions whereas the m=0 and m=2 have antisymmetric functions about the equator.



The code correctly maintains all the power in the given spherical harmonic order. There is a small numerical effect which introduces noise into the other modes, but it is not significant enough to impact our result.

---

# Review

This took a good day to figure out, and I think there's some redundant code in there (e.g. there isn't a reason to do the interpolation section as the TH,PHI grid is already equally sampled.) However, this project taught me a lot about the spherical harmonics and coordnate geometry (I hope I don't have to do it the later again for some time). The results show, the power to ofcourse remain within the original mode, and the higher order geometries have a much more complex behaviour that the dipole's. 

The tilting is done in the z-direction, hence why only the real or imaginary part of each m comes into play. I'de expect to see the opposite result when tilting in the y-direction, maybe with a sign change or two..

