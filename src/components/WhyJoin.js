import { RiMacFill } from "react-icons/ri";
import { FaCircleArrowDown } from "react-icons/fa6";
import { TbMoodKid } from "react-icons/tb";
import { LuTabletSmartphone } from "react-icons/lu";
const reasons = [
  {
    id:1,
    title:'Enjoy on your TV',
    desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon:<RiMacFill />
  },
  {
    id:2,
    title:'Download your shows to watch offline',
    desc:"Save your favorites easily and always have something to watch.",
    icon:<FaCircleArrowDown />
  },
  {
    id:3,
    title:'Watch everywhere',
    desc:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon:<LuTabletSmartphone />
  },
  {
    id:4,
    title:'Create profiles for kids',
    desc:"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon:<TbMoodKid />
  }
]
const WhyJoin = () => {
  return (
    <div className="whyjoin">
      <h2>More Reasons to Join</h2>
      <ul>
        {
          reasons.map((list)=>{
            return <li key={list.id}>
                    <h3>{list.title}</h3>
                    <p>{list.desc}</p>
                    <div>{list.icon}</div>
                    </li>
          })
        }
      </ul>
    </div>
  );
};

export default WhyJoin;