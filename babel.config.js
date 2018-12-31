const isNodeTarget = caller => caller.target === 'node';

module.exports = api => {
  const isNode = api.caller(isNodeTarget);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: isNode ? { node: 'current' } : undefined,
        useBuiltIns: !isNode ? 'usage' : undefined,
      },
    ],
  ];

  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
    '@loadable/babel-plugin',
  ];

  return {
    presets,
    plugins,
  };
};
