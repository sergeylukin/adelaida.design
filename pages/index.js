if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5e1a525227773e0d832d1397/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

export default () => (
  <div className='hello'>
    <img src="/static/logo.png" width="50%" alt="Adelaida Design" />
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        color: #7d7d7d;
        text-align: center;
        transition: 100ms ease-in background;
      }
    `}</style>
  </div>
)
