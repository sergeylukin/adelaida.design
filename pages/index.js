if (typeof document !== 'undefined' && document) {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5ea5701535bcbb0c9ab4c4a0/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}

export default () => (
  <div className='hello'>
    <img src="/static/logo.png" width="70%" alt="Adelaida Design" />
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
      }
      .hello {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font: 15px Helvetica, Arial, sans-serif;
        background: #cf011b;
        color: #7d7d7d;
        padding: 0;
        margin: 0;
        text-align: center;
        transition: 100ms ease-in background;
      }
    `}</style>
  </div>
)
