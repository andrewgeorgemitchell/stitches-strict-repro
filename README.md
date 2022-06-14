# Repo for Reproducing Stitches Issue

Repoduction repo for Stitches issue where typescript compile time slowdown massively when not using `"strict": true` in `tsconfig.json`

## Steps to reproduce

- Clone Repo
  - `git clone git@github.com:andrewgeorgemitchell/stitches-strict-repro.git`

- Install deps
  - `yarn install`

- Run TS compiler (will take ~200 seconds)
  - `yarn tsc`

- Enable strict mode in `tsconfig.json` line 10
  - `"strict": true,`

- Run TS compiler (will take ~4 seconds)
  - `yarn tsc`

## Possible Cause & Interesting observation

The issue when not in strict mode seems to be that Typescript spends a large amount of time comparing CSS objects to each other, you can see this behaviour for yourself by:
 
- commenting out line 71 in `src/components/Text/Text.tsx`
- uncommenting line 72 in `src/components/Text/Text.tsx`
