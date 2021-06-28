import HomePage, { getStaticProps as importedGetStaticProps } from './es'
export const getStaticProps = args => {
  const staticProps = importedGetStaticProps(args)
  return {
    ...staticProps,
    props: {
      ...staticProps.props,
      canonicalUrl: '/es',
    },
  }
}
export default HomePage
