#!/bin/bash

echo "Build script"

npm run eslint
npm run test
npm run test:e2e
npm run build

