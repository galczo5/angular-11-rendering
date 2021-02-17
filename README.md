# Angular 11 vs Angular 9
Comparing of render time.

This repo contains two angular-cli apps. One build with the latest Angular 11 and second one with Angular 9.
Same configuration and components.

## Run

```
cd angular9 && ng serve --prod --port 4201
cd angular11 && ng serve --prod --port 4202
```

Now you can use Chrome dev tools to compare `detectChanges` execution time.

## My results

|  | Angular 11 | Angular 9 |
| --- | --- | --- |
| 1k components | 197ms | 191ms |
| 10k components | 230ms | 230ms |

