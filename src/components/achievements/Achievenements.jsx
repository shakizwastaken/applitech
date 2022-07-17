import "./achievements.css";

const Achievenements = () => {
  const achievements = [
    {
      title: "Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ea doloremque, nobis iure ex natus quidem eveniet dolorum voluptatem perferendis animi non. Suscipit, dolore dignissimos est totam laboriosam quibusdam quod!",
      img: "/images/img.jpg",
    },
    {
      title: "Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ea doloremque, nobis iure ex natus quidem eveniet dolorum voluptatem perferendis animi non. Suscipit, dolore dignissimos est totam laboriosam quibusdam quod!",
      img: "/images/img.jpg",
    },
    {
      title: "Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ea doloremque, nobis iure ex natus quidem eveniet dolorum voluptatem perferendis animi non. Suscipit, dolore dignissimos est totam laboriosam quibusdam quod!",
      img: "/images/img.jpg",
    },
    {
      title: "Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ea doloremque, nobis iure ex natus quidem eveniet dolorum voluptatem perferendis animi non. Suscipit, dolore dignissimos est totam laboriosam quibusdam quod!",
      img: "/images/img.jpg",
    },
    {
      title: "Title",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ea doloremque, nobis iure ex natus quidem eveniet dolorum voluptatem perferendis animi non. Suscipit, dolore dignissimos est totam laboriosam quibusdam quod!",
      img: "/images/img.jpg",
    },
  ];

  const renderAchievements = () => {
    return achievements.map(({ title, desc, img }) => (
      <div className="achievement_item">
        <img src={img} alt={`representation of ${title}`} />
        <div className="achievement_item_info">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="achievements_section section">
      <div className="achievements_container container">
        {renderAchievements()}
      </div>
    </div>
  );
};

export default Achievenements;
