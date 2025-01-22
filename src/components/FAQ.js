import { useState } from 'react';
import { VscAdd,VscChromeClose } from "react-icons/vsc";

const faqList=[
  {id:1, 
    Q:'What can I watch on Netflix?',
    A: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'},
  {id:2,
    Q:'What is Netflix?',
    A:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {id:3,
    Q:'How much does Netflix cost?',
    A:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from KRW 5,500 to KRW 17,000 a month. No extra costs, no contracts.'
  },
  {id:4,
    Q:'Where can I watch?',
    A:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {id:5,
    Q:'How do I cancel?',
    A:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {id:6,
    Q:'Is Netflix good for kids?',
    A:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
];

const FAQ = () => {
  const [openIdx,setOpenIdx] = useState(null);
  const handleClick=(idx)=>{
    // setOpenIdx(idx);
    setOpenIdx( openIdx === idx ? null : idx);
  }
  return (
    <div className='faq'> 
      <h2>Frequently Asked Questions</h2>
      <ul className='faq-list'>
        {
          faqList.map((list,idx)=>{
            return <li key={list.id}>
                    <button onClick={()=>handleClick(idx)}>
                      <span>{list.Q}</span>
                      {openIdx === idx ? <VscChromeClose /> : <VscAdd />}
                    </button>
                    {/* {openIdx === idx && <p>{list.A}</p>} */}
                    {<p className={openIdx === idx ? 'open':''} >{list.A}</p>}
                  </li>
          })
        }
      </ul>
    </div>
  );
}

export default FAQ;