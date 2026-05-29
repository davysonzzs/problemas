export default function RespostasVisor({ respostas }){
    return(
        <>
        {respostas.map((item) =>(
            <div className="resposta-item">
                <div className="user-info">
                    <img src={item.user_avatar} />
                    <p><span>{item.user_nome}</span></p>
                </div>
                <div className="resposta-conteudo">
                    <p><span>{item.descricao}</span></p>
                </div>
            </div>
        ))}
        </>
    )
}