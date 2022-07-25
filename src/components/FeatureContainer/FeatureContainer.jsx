import Feature from '../Feature/Feature'

const FeatureContainer = ({data = []}) => {
    return (
        data.map(feature => <Feature key={feature.id} src={feature.src} alt={feature.alt} text={feature.text} />)
    )
}

export default FeatureContainer