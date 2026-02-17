export default function Home() {
  return (
    <main>
      
      <section style={{padding:'100px 20px',textAlign:'center',background:'#0ea5e9',color:'white'}}>
        <h1>OCE Cuci Express</h1>
        <p>Laundry Cepat • Bersih • Wangi</p>
      </section>

      <section style={{padding:'80px 20px',textAlign:'center'}}>
        <h2>Pricelist</h2>
        <p>Cuci Reguler: Rp7.000/kg</p>
        <p>Cuci Express: Rp10.000/kg</p>
        <p>Setrika: Rp5.000/kg</p>
      </section>

      <section style={{padding:'80px 20px',textAlign:'center',background:'#f1f5f9'}}>
        <h2>Hubungi Kami</h2>
        <p>Customer Service: 085129316312</p>
      </section>

      <a href="https://wa.me/6285129316312" target="_blank"
        style={{position:'fixed',bottom:'20px',right:'20px',background:'#25D366',
        color:'white',padding:'15px 20px',borderRadius:'50px',
        textDecoration:'none',fontWeight:'bold'}}>
        WA Cabang 1
      </a>

      <a href="https://wa.me/6285129316312" target="_blank"
        style={{position:'fixed',bottom:'80px',right:'20px',background:'#128C7E',
        color:'white',padding:'15px 20px',borderRadius:'50px',
        textDecoration:'none',fontWeight:'bold'}}>
        WA Cabang 2
      </a>

      <a href="https://www.google.com/maps" target="_blank"
        style={{position:'fixed',bottom:'140px',right:'20px',background:'#ef4444',
        color:'white',padding:'15px 20px',borderRadius:'50px',
        textDecoration:'none',fontWeight:'bold'}}>
        Maps
      </a>

    </main>
  );
}
