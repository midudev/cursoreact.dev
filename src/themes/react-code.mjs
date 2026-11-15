// Shared by Markdown and MDX. Keep every token readable on the editor background.
export default {
  name: 'react-code',
  type: 'dark',
  colors: { 'editor.background': '#090e18', 'editor.foreground': '#f4f7ff' },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#aebdd6' } },
    { scope: ['keyword', 'storage'], settings: { foreground: '#cc86ff' } },
    { scope: ['string', 'string.template'], settings: { foreground: '#91ff65' } },
    { scope: ['constant', 'constant.numeric'], settings: { foreground: '#ffb347' } },
    { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#ffe14a' } },
    { scope: ['variable', 'support.variable'], settings: { foreground: '#f4f7ff' } },
    { scope: ['entity.name.type', 'support.type'], settings: { foreground: '#36f4d3' } },
    { scope: ['entity.name.tag'], settings: { foreground: '#ff6caa' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#38d9ff' } },
    { scope: ['variable.other.property', 'variable.other.object', 'support.variable.property'], settings: { foreground: '#38d9ff' } },
    { scope: ['punctuation', 'keyword.operator'], settings: { foreground: '#e4edff' } },
    { scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css', 'entity.name.tag.css'], settings: { foreground: '#ffe14a' } },
    { scope: ['support.type.property-name.css', 'variable.other.custom-property.css'], settings: { foreground: '#38d9ff' } },
    { scope: ['support.constant.property-value.css', 'support.constant.color.w3c-standard-color-name.css'], settings: { foreground: '#91ff65' } },
    { scope: ['constant.numeric.css', 'constant.other.color.rgb-value.css', 'keyword.other.unit.css'], settings: { foreground: '#ffb347' } },
    { scope: ['support.function.misc.css', 'support.function.css'], settings: { foreground: '#cc86ff' } },
  ],
}
