// Shared by Markdown and MDX. Keep every token readable on the editor background.
export default {
  name: 'react-code',
  type: 'dark',
  colors: { 'editor.background': '#10141c', 'editor.foreground': '#f1f5ff' },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#a3b3cc' } },
    { scope: ['keyword', 'storage'], settings: { foreground: '#d6a0ff' } },
    { scope: ['string', 'string.template'], settings: { foreground: '#a3ef91' } },
    { scope: ['constant', 'constant.numeric'], settings: { foreground: '#ffbc7d' } },
    { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#ffe082' } },
    { scope: ['variable', 'support.variable'], settings: { foreground: '#f1f5ff' } },
    { scope: ['entity.name.type', 'support.type'], settings: { foreground: '#75e5da' } },
    { scope: ['entity.name.tag'], settings: { foreground: '#ff8fae' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#80caff' } },
    { scope: ['punctuation', 'keyword.operator'], settings: { foreground: '#dce6f5' } },
    { scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css', 'entity.name.tag.css'], settings: { foreground: '#ffdb78' } },
    { scope: ['support.type.property-name.css', 'variable.other.custom-property.css'], settings: { foreground: '#80caff' } },
    { scope: ['support.constant.property-value.css', 'support.constant.color.w3c-standard-color-name.css'], settings: { foreground: '#a3ef91' } },
    { scope: ['constant.numeric.css', 'constant.other.color.rgb-value.css', 'keyword.other.unit.css'], settings: { foreground: '#ffbc7d' } },
    { scope: ['support.function.misc.css', 'support.function.css'], settings: { foreground: '#d6a0ff' } },
  ],
}
