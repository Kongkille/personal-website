<template>
  <h2
    class="font-bold font-heading text-text-primary dark:text-dark-text-primary my-1"
  >
    Work experience
  </h2>
  <WorkExperienceItem
    title="Frontend Engineer - Lun"
    description="Decarbonizing homes. Faster."
    link="https://www.lun.energy"
    :from="2023"
    :technologies="['React', 'TS', 'Remix', 'Swift', 'Mapbox']"
  />
  <WorkExperienceItem
    title="Fullstack Engineer - ElectricityMaps"
    description="Maintaining frontend and app-backend for the #1 starred climate-change open-source project. During this time, we rewrote most of the codebase including migrating to TS and incorporated automated testing"
    link="https://www.electricitymaps.com"
    :from="2021"
    :to="2022"
    :technologies="[
      'React',
      'TS',
      'Python',
      'Postgresql',
      'Node',
      'GCP',
      'Mapbox',
      'Cordova',
    ]"
  />
  <WorkExperienceItem
    title="Product Manager - ElectricityMaps"
    description="Manage product development and roadmap while growing from 2 to 16 team members. I was PoC for large clients such as Google and Microsoft."
    link="https://www.electricitymaps.com"
    :from="2020"
    :to="2021"
    :technologies="['Pipedrive', 'Agile', 'Figma', 'Plausible Analytics']"
  />
  <WorkExperienceItem
    title="Co-founder - Geowiz"
    description="Team-based SAAS product for managing and editing geodata for micromobility purposes. Acquired by Voi in 2021"
    link="https://app.geowiz.tech/demo"
    :from="2019"
    :to="2021"
    :technologies="['React', 'Node', 'Firebase', 'Python', 'QGIS', 'Mapbox']"
  />
</template>
