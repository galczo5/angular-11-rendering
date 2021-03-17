# Angular 11 vs Angular 9
Comparing of render time.

This repo contains two angular-cli apps. One build with the latest Angular 11 and second one with Angular 9.
Same configuration and components.

## Run

```
cd angular9 && ng serve --prod --port 4201
cd angular11 && ng serve --prod --port 4202
```

Start recording chrome profile and the click "refresh" button.
Now you can use Chrome dev tools to compare `detectChanges` execution time.
