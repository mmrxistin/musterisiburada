/*Bismillahirrahmanirrahim
  Elhamdulillahirabbulalemin
  Es selatu vesselamu ala rasulina Muhammedin
  SUPHANALLAHI VELHAMDULILLAHI VE LA ILAHE ILLALLAHU VALLAHU EKBER*/
(function(){
  let posts = [];
  const loginBox = document.getElementById('login-box');
  const editor = document.getElementById('editor');
  const enterBtn = document.getElementById('enter');
  const pwInput = document.getElementById('pw');
  const postsList = document.getElementById('posts-list');
  const newBtn = document.getElementById('new-post');
  const exportBtn = document.getElementById('export');

  function allow() {
    loginBox.style.display = 'none';
    editor.style.display = '';
  }

  enterBtn.addEventListener('click',()=>{
    // Local-only admin: allow any non-empty password.
    if(pwInput.value && pwInput.value.trim().length>0){
      allow();
    } else alert('Enter a password (local only)');
  });

  async function load(){
    try{
      const r = await fetch('./posts.json');
      posts = await r.json();
      renderList();
    }catch(e){
      console.error(e); posts = []; renderList();
    }
  }

  function renderList(){
    postsList.innerHTML = '';
    posts.forEach(p=>{
      const div = document.createElement('div'); div.className='post';
      const title = document.createElement('input'); title.value = p.title; title.style.width='100%';
      const date = document.createElement('input'); date.value = p.date; date.style.width='100%';
      const excerpt = document.createElement('textarea'); excerpt.value = p.excerpt; excerpt.rows=2; excerpt.style.width='100%';
      const content = document.createElement('textarea'); content.value = p.content; content.rows=6; content.style.width='100%';
      const btnSave = document.createElement('button'); btnSave.textContent='Save';
      const btnDel = document.createElement('button'); btnDel.textContent='Delete';
      btnSave.addEventListener('click',()=>{
        p.title = title.value; p.date = date.value; p.excerpt = excerpt.value; p.content = content.value;
        alert('Saved to memory. Use Export to download updated posts.json');
        renderList();
      });
      btnDel.addEventListener('click',()=>{
        if(confirm('Delete this post?')){
          posts = posts.filter(x=>x!==p); renderList();
        }
      });
      div.appendChild(title); div.appendChild(date); div.appendChild(excerpt); div.appendChild(content);
      div.appendChild(btnSave); div.appendChild(btnDel);
      postsList.appendChild(div);
    });
  }

  newBtn.addEventListener('click',()=>{
    const id = posts.reduce((m,x)=>Math.max(m,x.id||0),0)+1;
    const p = {id, title:'Untitled',date:new Date().toISOString().slice(0,10),excerpt:'',content:'<p></p>'};
    posts.unshift(p); renderList();
  });

  exportBtn.addEventListener('click',()=>{
    const data = JSON.stringify(posts, null, 2);
    const blob = new Blob([data], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download='posts.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });

  // boot
  load();
})();
