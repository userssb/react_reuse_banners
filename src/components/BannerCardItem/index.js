import './index.css'

const BannerCardItem = props => {
  const {bannersList} = props
  const {headerText, description, className} = bannersList
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
