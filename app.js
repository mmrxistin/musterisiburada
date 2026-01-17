/*Bismillahirrahmanirrahim
  Elhamdulillahirabbulalemin
  Es selatu vesselamu ala rasulina Muhammedin
  SUPHANALLAHI VELHAMDULILLAHI VE LA ILAHE ILLALLAHU VALLAHU EKBER*/
(function(){
  const container = document.querySelector('.container');
  function el(tag, cls, html){const e=document.createElement(tag);if(cls) e.className=cls;if(html!=null) e.innerHTML=html;return e}
  async function loadPosts(q=''){
    try{
      const res = await fetch('./posts.json');
      const posts = await res.json();
      const list = document.querySelector('.posts');
      list.innerHTML = '';
      const filtered = posts.filter(p=>p.title.toLowerCase().includes(q.toLowerCase())||p.excerpt.toLowerCase().includes(q.toLowerCase()));
      filtered.forEach(p=>{
        const card = el('article','post');
        card.appendChild(el('h3',null,p.title));
        card.appendChild(el('div','meta',p.date));
        card.appendChild(el('div','excerpt',p.excerpt));
        const a = el('a','readmore','More'); a.href = `post.html?id=${p.id}`;
        card.appendChild(a);
        list.appendChild(card);
      });
    }catch(err){
      console.error('Failed to load posts',err);
    }
  }

  document.addEventListener('DOMContentLoaded',()=>{
    const input = document.querySelector('#q') || document.querySelector('#search');
    if(input) input.addEventListener('input',e=>loadPosts(e.target.value));
    loadPosts();
  });
})();
