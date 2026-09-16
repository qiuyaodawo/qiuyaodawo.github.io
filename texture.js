(() => {
  const headings = document.querySelectorAll('.ink-heading');
  if (!headings.length || !CSS.supports('filter', 'url("#ink-texture")')) return;

  const namespace = 'http://www.w3.org/2000/svg';
  const create = (tag, attributes = {}) => {
    const element = document.createElementNS(namespace, tag);
    for (const [name, value] of Object.entries(attributes)) {
      element.setAttribute(name, value);
    }
    return element;
  };

  // Keep definitions in the render tree; display:none can prevent filter lookup.
  const svg = create('svg', {
    class: 'texture-definitions',
    width: '0',
    height: '0',
    'aria-hidden': 'true',
    focusable: 'false',
  });
  const definitions = create('defs');
  svg.append(definitions);
  document.body.prepend(svg);

  headings.forEach((heading, index) => {
    const id = `ink-texture-${index}`;
    const filter = create('filter', {
      id,
      x: '-10%',
      y: '-20%',
      width: '120%',
      height: '140%',
      'color-interpolation-filters': 'sRGB',
    });
    filter.append(
      create('feTurbulence', {
        type: 'fractalNoise',
        baseFrequency: '0.08',
        numOctaves: '2',
        seed: String(1 + Math.floor(Math.random() * 1000000)),
        result: 'noise',
      }),
      create('feDisplacementMap', {
        in: 'SourceGraphic',
        in2: 'noise',
        scale: '1.3',
        xChannelSelector: 'R',
        yChannelSelector: 'G',
      }),
    );
    definitions.append(filter);
    heading.style.filter = `url("#${id}")`;
  });
})();
