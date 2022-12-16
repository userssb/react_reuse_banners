import './index.css'

const BannerCardItem = props => {
  const {cardsList} = props
  const {id, headerText, description, className} = cardsList
  return (
    <li className="list-cont">
      <div className={className}>
        <div className="text-cont">
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button className="butt">Show More</button>
        </div>
      </div>
    </li>
  )
}
export default BannerCardItem


// import './index.css'

// const BannerCardItem = props => {
//   const {bannersList} = props
//   const {headerText, description, className} = bannersList
//   return (
//     <li className={`${className} banner-card-item`}>
//       <div>
//         <h1>{headerText}</h1>
//         <p>{description}</p>
//         <button className="show-more-button" type="button">
//           Show More
//         </button>
//       </div>
//     </li>
//   )
// }
// export default BannerCardItem
