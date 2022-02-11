# pp-radio



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type            | Default     |
| --------- | --------- | ----------- | --------------- | ----------- |
| `name`    | `name`    |             | `string`        | `undefined` |
| `options` | --        |             | `OptionShape[]` | `[]`        |
| `value`   | `value`   |             | `any`           | `undefined` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `optionChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [pp-radio-option](.)

### Graph
```mermaid
graph TD;
  pp-radio-options --> pp-radio-option
  pp-radio-option --> pp-text
  pp-radio-option --> pp-radio
  style pp-radio-options fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
