# Frontend architecture

Routes live under `src/app`; reusable interaction components under `src/components`; catalog UI under `src/features`; demo domain data under `src/data`; persistent client-state stores under `src/state`. Route-specific CSS modules prevent generic styling from causing cross-page conflicts.
