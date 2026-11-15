const technologies = {
  css: ['CSS', 'css', '#663399'],
  html: ['HTML', 'html5', '#E34F26'],
  jsx: ['React · JSX', 'react', '#61dafb'],
  tsx: ['React · TSX', 'react', '#61dafb'],
  javascript: ['JavaScript', 'javascript', '#f7df1e'],
  js: ['JavaScript', 'javascript', '#f7df1e'],
  typescript: ['TypeScript', 'typescript', '#65b8ff'],
  ts: ['TypeScript', 'typescript', '#65b8ff'],
  bash: ['Terminal', 'gnubash', '#a3ef91'],
  sh: ['Terminal', 'gnubash', '#a3ef91'],
  json: ['JSON', 'json', '#e1e9f7'],
}

export default {
  name: 'technology-header',
  root(root) {
    const language = this.options.lang || 'text'
    const technology = technologies[language]
    const label = technology?.[0] || 'Código'
    const icon = technology ? [{ type: 'element', tagName: 'span', properties: {
      className: ['code-technology-icon'], ariaHidden: 'true',
      style: `--technology-icon:url('/icons/${technology[1]}.svg');--technology-color:${technology[2]}`,
    }, children: [] }] : []
    const logo = language === 'css' ? [{ type: 'element', tagName: 'span', properties: { className: ['code-logo-badge'] }, children: icon }] : icon
    root.children = root.children.map(node => node.type === 'element' && node.tagName === 'pre' ? {
      type: 'element', tagName: 'div', properties: { className: ['code-block'] }, children: [
        { type: 'element', tagName: 'div', properties: { className: ['code-block-heading'] }, children: [
          ...logo, { type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: label }] },
          { type: 'element', tagName: 'button', properties: { type: 'button', className: ['code-copy'], ariaLabel: `Copiar código de ${label}`, ariaLive: 'polite' }, children: [
            { type: 'element', tagName: 'span', properties: { className: ['code-copy-icon'], ariaHidden: 'true' }, children: [] },
            { type: 'element', tagName: 'span', properties: { className: ['code-copy-label'] }, children: [{ type: 'text', value: 'Copiar' }] },
          ] },
        ] }, node,
      ],
    } : node)
    return root
  },
}
