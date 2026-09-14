const SUPABASE_URL = "https://iifvffjawtmcfdvnyyla.supabase.co"
const SUPABASE_KEY = "sb_publishable_yLxv_sETqr6GJrB9mcsy6g_xPS-0lgq"

const { createClient } = supabase;
const banco = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const lista = document.getElementById("lista");
const form = document.getElementById("formChamado");

async function mostrarChamados(){
    const { data, error } = await banco
    .from("chamados")
    .select("*");
    if (error){
        console.log(error);
        return;
    } lista.innerHTML = `<pre> ${JSON.stringify(data, null, 2)} </pre>`;
}
form.addEventListener("submit", async function (event) {
event.preventDefault()
const equipamento = document.getElementById("equipamento").value;
const problema = document.getElementById("problema").value;
const descricao = document.getElementById("descricao").value;
const prioridade = document.getElementById("prioridade").value; 

//agora é o banco de dados
const { error } = await banco
     .from("chamados")
     .insert({
        equipamento: equipamento,
        problema: problema,
        "descrição": descricao,
        prioridade: prioridade,
     });
     if (error) {
        console.log(error);
        return;
     }
     alert("Chamado enviado com sucesso!");
     form.reset();
     mostrarChamados();
})

mostrarChamados();