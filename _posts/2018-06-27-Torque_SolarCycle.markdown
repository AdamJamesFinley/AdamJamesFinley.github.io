---
layout: post
title:  "The Effect of Magnetic Variability on Angular Momentum Loss for the Sun"
date:   2018-06-27 11:00:00 +0000
categories: PhD
---
---
Assets used for this project:
* Python
* pySHTOOLS, for the spherical harmonic tools: [link](https://shtools.oca.eu/shtools/index.html)
	* the subsequent python dependencies
* Matplotlib, for visualisations: [link](https://matplotlib.org/index.html)

* Remote sensing data is taken from both the Michelson Doppler Imager and Helioseismic and Magnetic Imager, onboard the SOlar and Heliospheric Observatory and the Solar Dynamics Observatory, respectively. In-situ data is colected from the Advance Composition Explorer satelite. Sunspot number is taken from WDC-SILSO, Royal Observatory of Belgium.

---

<img src="/images/SolarTorque/SolarCycleTorqueFig.png" height='550' align="middle">

---

### The Question:
How does the magnetic variability of the Sun, over the solar cycle, impact the angular momentum loss rate? Also, given the wealth of data available for the Sun, how do the angular momentum prescriptions from Finley & Matt (2018) compare with the expect torque based on the obsereved spins of other stars?

---

### Method
We calculate the angular momentum loss rate using three different techniques, two of which are based on the simulations presented in Finley & Matt (2018).

1. Surface Magnetic Field Torque: Using the spherical harmonic components of MDI and HMI magnetograms, with the estimated mass loss rate from in-situ spacecraft. Average torque is found to be 0.4x10^30 erg.

2. Open Magnetic Flux Torque: Use both the estimated mass loss rate and the open magnetic flux in the wind, as calculated by ACE. Average torque is found to be 2.3x10^30 erg.

3. Inferred Torque from the Observed Spins of Other Stars: Expected torque is found to be 6.2x10^30 erg.

---

### Results

The three methods produce differing estimates for the solar wind angular momentum loss rate:

<table class="image" align="right">
<tr><td><img src="/images/SolarTorque/All_torques.png" height='320' align="middle"></td></tr>
<tr><td class="caption"><h4>Torque Comparison: Method 1 - black solid line, with solid orange average. Method 2 - grey and magenta solid lines, with dashed orange average. Method 3 - dot dashed orange line. Black squares represent the 3D simulations from Reville & Brun (2017). Yellow, green and blue shading represents sunspot cycles 22, 23 and 24 respectively.</h4></td></tr>
</table>

The two MHD methods are discrepent in strength due to the open flux problem. They differ in shape, perhaps, due to the influence of non-axisymetric modes and/or the effect of Interplanetary Coronal Mass Ejections which are most frequent at solar maximum. The MHD methods are boh different to the inferred spin-down torque required to produce Skumanich. The Sun may be in a low state currently compared to the million year average?

---

# Review

This work was very informative, bridging the solar-stellar connection and really testing our understanding of stellar wind braking. The results from this work will continue to influence future projects.

Points of Interest:
* Discrepency between Surface and Open Flux methods (1 & 2) -> Open Flux Problem
* Discrepency between Open Flux and Inferred Torque -> Further variability on the Myr timescale, problems with the MHD models? Unclear.
* The variability of the torque over the cycle, and between different sunspot cycles. We observe a 30% reduction in the value fo the torque from cycle 23 to cycle 24.

