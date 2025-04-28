const products = [
  ];
  
  const cart = [];
  
  function renderProducts() {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="https://via.placeholder.com/250x150?text=${encodeURIComponent(p.name)}">
        <h3>${p.name}</h3>
        <p>฿${p.price}</p>
        <button onclick="addToCart(${p.id})">เพิ่มลงตะกร้า</button>
      `;
      list.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
  }
  
  function renderCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ฿${item.price}`;
      list.appendChild(li);
      total += item.price;
    });
    document.getElementById('total').textContent = `รวมทั้งหมด: ฿${total}`;
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("ยังไม่มีสินค้าในตะกร้า");
      return;
    }
    alert("ขอบคุณที่สั่งซื้อ! ระบบกำลังจัดการคำสั่งซื้อของคุณ");
    cart.length = 0;
    renderCart();
  }
  
  function sendContact(event) {
    event.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้ว! ขอบคุณที่ติดต่อเรา");
  }

  renderProducts();
 