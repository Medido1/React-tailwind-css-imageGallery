import Tags from "./Tags";

function ImgCard({image}) {
  const tags = image.tags.split(",");

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'> 
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return <Tags key={index} tag={tag}/>
        })}
        
      </div>
    </div>
  )
}

export default ImgCard;