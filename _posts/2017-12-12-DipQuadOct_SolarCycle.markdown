---
layout: post
title:  "The Dipole, Quadrupole and Octupole Components of the Solar Magnetic Field Over 22 Years"
date:   2017-12-11 11:00:00 +0000
categories: PhD
---
---
Assets used for this project:
* Python
* pySHTOOLS, for the spherical harmonic tools: [link](https://shtools.oca.eu/shtools/index.html)
	* the subsequent python dependencies
* PLUTO MHD code, for the PFSS models [link](http://plutocode.ph.unito.it/)
* VisIt, for visualisations: [link](https://wci.llnl.gov/simulation/computer-codes/visit/downloads)
* Matplotlib, for visualisations: [link](https://matplotlib.org/index.html)

* Data from both the Michelson Doppler Imager and Helioseismic and Magnetic Imager, onboard the SOlar and Heliospheric Observatory and the Solar Dynamics Observatory, respectively.

---

### The Question:
As shown previously, the Solar magnetic field can be decomposed into its spherical harmonic components (see work by DeRosa et al. 2012). The magnetic lowest order components (l=1,2,3) represent the large scale magnetic field, which has been shown to be the most significant in producing an efficient braking torque from a given mass loss in a stellar wind (Finley & Matt. 2017, Finley & Matt. Submitted, and future works). The Sun's magnetic field has been recorded for many decades, surface magnetograms are available from both gorund based (Wilcox Solar Obs, Global Oscillation Network Group) and spacecraft (SOlar and Heliospheric Obs, Solar Dynamics Obs) observatories. e.g. A magnetogram from HDI onboard SDO, depicting the radial magnetic field strength:
<img src="/images/MagData/SolarMagnetogram_HDI2196.png" height='340' align="middle">


Using the data from MDI and HMI, onboard SOHO and SDO respectively, how does the magnetic field in these lowest order components evolve durring the 22 year solar cycle?

---

### Method

For each magnetogram (spannning the years 1996.6-2017.9), the spherical harmonics are evaluated and stored in tabulated data files. For each l=1,2,3 component, including all m's, a Potential Field Source Surface model (Source Surface Radius of 2.5 Solar Radii) is computed for every map using the PLUTO code (just for ease) and then is visualised in VisIt. The outputs are recorded and formatted into a video file.

---

### Results
<figure>
    <video controls height="410" autoplay='' loop='' align='center'>
      <source src="/images/Videos/Adam_Sol.mp4" type="video/mp4">
    </video>
    <figcaption>Fig1. - The evolution of the dipole, quadrupole and octupole components of the global magnetic field during the last 22 years. Top Left: Synoptic magnetograms from both MDI and HMI in a timeseries from 1996.6-2017.9, the colour represents the radial magnetic field with the colourscale covering -50G to 50G. Top Right: The decomposed components from the spherical harmonic analysis, from top to bottom, dipole, quadrupole and octupole, with increasing m from left to right (the leftmost panels represent the axisymmetric components). Bottom Row: PFSS recontructions of the dipole, quadrupole and octupole components alone, each including all values of m for their given l. The source surface is set to 2.5 solar radii and the surface colourscales cover -5G to 5G.</figcaption>
</figure>

---

# Review

This work required the use of scripting and brute force to produce over 200 PFSS models for each harmonic. The video produced from this, in essence, highlights the results of Section 3 in the Derosa et al. (2012) work, and although they do not show anything new, are an interesting way to view the wealth of solar data available. 

Points of Interest:
* The dipole's tilt and strength during the cycle.
* The coherence of the axisymmetric dipole and octupole.
* The relative strength of each mode during the cycle.

