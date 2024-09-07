//console.log (dados);//
document.addEventListener('DOMContentLoaded', () => {
    let section = document.getElementById("resultados-pesquisa");
  
    if (section) {
      section.innerHTML = `
        <div class="item-resultado">
          <h2>Stark</h2>
          <p class="descricao-meta">
            </p>
        </div>
      `;
    } else {
      console.error("Elemento 'resultados-pesquisa' não encontrado.");
    }
  });