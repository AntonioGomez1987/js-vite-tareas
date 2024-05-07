(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();let T;const S=new Uint8Array(16);function C(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(S)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),L={randomUUID:v};function A(e,t,a){if(L.randomUUID&&!t&&!e)return L.randomUUID();e=e||{};const d=e.random||(e.rng||C)();return d[6]=d[6]&15|64,d[8]=d[8]&63|128,E(d)}class u{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new u("Tender cama"),new u("Sacar al perro"),new u("Preparar desayuno"),new u("Clase de Lógica"),new u("Preparar almuerzo"),new u("... etc")],filter:c.All},P=()=>{b(),console.log("InintStore 🍩")},b=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},h=()=>{localStorage.setItem("state",JSON.stringify(l))},I=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},U=e=>{if(!e)throw new Error("Description is required");l.todos.push(new u(e)),h()},D=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),h()},O=e=>{l.todos=l.todos.filter(t=>t.id!==e),h()},q=()=>{l.todos=l.todos.filter(e=>!e.done),h()},F=(e=c.All)=>{l.filter=e,h()},x=()=>l.filter,i={addTodo:U,deleteCompleted:q,deleteTodo:O,getCurrentFilter:x,getTodos:I,initStore:P,loadStore:b,setFilter:F,toggleTodo:D},M=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
           \r
        </ul>\r
    </section>\r
\r
    \r
    <footer class="footer">\r
       \r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        \r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <p>Creado por <a href="https://github.com/AntonioGomez1987">Jose Antonio Gomez</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,k=e=>{if(!e)throw new Error("A TODO object is required");const{description:t,done:a,id:d}=e,o=`
            <div class="view">
                <input class="toggle" type="checkbox" ${a?"checked":""}>
                <label>${t}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">

    `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),a&&n.classList.add("completed"),n};let w;const N=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=i.getTodos(c.Pending).length};let f;const H=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element ${e} not found`);f.innerHTML="",t.forEach(a=>{f.append(k(a))})},g={ClearCompletedButton:".clear-completed",NewTodoInput:"#new-todo-input",PendingCountLabel:"#pending-count",TodoFilters:".filtro",TodoList:".todo-list"},V=e=>{const t=()=>{const s=i.getTodos(i.getCurrentFilter());H(g.TodoList,s),a()},a=()=>{N(g.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=M,document.querySelector(e).append(s),t()})();const d=document.querySelector(g.NewTodoInput),o=document.querySelector(g.TodoList),n=document.querySelector(g.ClearCompletedButton),p=document.querySelectorAll(g.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(i.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const m=s.target.closest("[data-id]");i.toggleTodo(m.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const m=s.target.className==="destroy",y=s.target.closest("[data-id]");!y||!m||(i.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{i.deleteCompleted(),t()}),p.forEach(s=>{s.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":i.setFilter(c.All);break;case"Pendientes":i.setFilter(c.Pending);break;case"Completados":i.setFilter(c.Completed);break}t()})})};i.initStore();V("#app");
