# pp-checkbox



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type            | Default     |
| --------- | --------- | ----------- | --------------- | ----------- |
| `name`    | `name`    |             | `string`        | `undefined` |
| `options` | --        |             | `OptionShape[]` | `[]`        |
| `value`   | --        |             | `any[]`         | `[]`        |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `listOptionChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [pp-checkbox-option](.)

### Graph
```mermaid
graph TD;
  pp-checkbox-options --> pp-checkbox-option
  pp-checkbox-option --> pp-text
  pp-checkbox-option --> pp-checkbox
  style pp-checkbox-options fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
