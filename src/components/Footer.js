const fmenus = [
  {id:1, title:'FAQ',url:'#'},
  {id:2, title:'Help Center',url:'#'},
  {id:3, title:'Account',url:'#'},
  {id:4, title:'Media Center',url:'#'},
  {id:5, title:'Investor Relations',url:'#'},
  {id:6, title:'Jobs',url:'#'},
  {id:7, title:'Ways to Watch',url:'#'},
  {id:8, title:'Terms of Use',url:'#'},
  {id:9, title:'Privacy Statement',url:'#'},
  {id:10, title:'Cookie Preferences',url:'#'},
  {id:11, title:'Corporate Information',url:'#'},
  {id:12, title:'Contact Us',url:'#'},
  {id:12, title:'Speed Test',url:'#'},
  {id:12, title:'Legal Notices',url:'#'},
  {id:12, title:'Only on Netflix',url:'#'}
]
const Footer = () => {
  return (
    <footer>
      <p className="contact">Questions? Contact us. <a href='tel:01035442414'>010-3544-2414</a></p>
      <div className="f-menu">
      {
        fmenus.map((list)=>{
          return <a href={list.url} key={list.id}>{list.title}</a>
        })
      }
      </div>
      <p>Netflix South Korea</p>
    </footer>
  );
};

export default Footer;