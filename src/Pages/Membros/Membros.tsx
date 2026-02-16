import React, { useState } from "react";
import style from "./Membros.module.css";








const Membros = () => {

  const [name, setName] = useState<string>('')
  const [nacionalidade, setNacionalidade] = useState<string>('')
  const [dataDeNascimento, setDataDeNascimento] = useState<string>('')
  const [naturalidade, setNaturalidade] = useState<string>('')
  const [fatherName, setFatherName] = useState<string>('')
  const [motherName, setMotherName] = useState<string>('')
  const [estadoCivil, setEstadoCivil] = useState<string>('')

  const [spouseName, setSpouseName] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')

  const [cep, setCep] = useState<string>("")
  const [endereco, setEndereco] = useState<string>('')
  const [bairro, setBairro] = useState<string>('')
  const [municipio, setMunicipio] = useState<string>('')
  const [unidadeFederal, setUnidadeFederal] = useState<string>('')

  const [igrejaDeBatismo, setIgrejaDeBatismo] = useState<string>('')
  const [dataDeBatismo, setDataDeBatismo] = useState<string>('')

  console.log(name)


  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <h1>Ficha de Cadastro IPPO - JV</h1>
        <div className={style.dadosIndividuais}>
          {/*Nome */}
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              value={name} />
          </div>
          {/*Nacionalidade */}
          <div>
            <label htmlFor="Nacionalidade">Nacionalidade:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNacionalidade(e.target.value)}
              value={nacionalidade}
            />
          </div>
          {/*Data de Nascimento*/}
          <div>
            <label htmlFor="Birthday">Data de nascimento:</label>
            <input type="date" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataDeNascimento(e.target.value)}
              value={dataDeNascimento} />
          </div>
          {/*Naturalidade */}
          <div>
            <label htmlFor="Naturalidade">Naturalidade:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNaturalidade(e.target.value)}
              value={naturalidade} />
          </div>
          {/*Pai */}
          <div>
            <label htmlFor="Pai">Pai:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFatherName(e.target.value)}
              value={fatherName} />
          </div>
          {/*Mae */}
          <div>
            <label htmlFor="Mae">Mãe:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMotherName(e.target.value)}
              value={motherName} />
          </div>
          {/*Estado Civil */}
          <div>
            <label htmlFor="EstadoCivil">Estado civil:</label>
            <select name="estadoCivil" id=""
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEstadoCivil(e.target.value)} value={estadoCivil}>
              <option value="">Selecione</option>
              <option value="Solteiro">solteiro</option>
              <option value="Casado">casado</option>
              <option value="Divorciado">divorciado</option>
              <option value="Viuvo">viúvo</option>
            </select>
          </div>
          {/*Nome do Conjugue */}
          <div>
            <label htmlFor="NomedoConjugue">Nome do Conjugue:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpouseName(e.target.value)}
              value={spouseName} />
          </div>
          {/*CPF*/}
          <div>
            <label htmlFor="CPF">CPF:</label>
            <input type="string"  maxLength={11} required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
              value={cpf} />
          </div>

          <div>
            <label htmlFor="cargo">Cargo:</label>
            <select name="Cargo" id="">
              <option value="">Selecione</option>
              <option value="Membro">Membro</option>
              <option value="Obreiro">Obreiro</option>
              <option value="Diacono">Diacono</option>
              <option value="Missionario">Missionario</option>
              <option value="Pastor">Pastor</option>
            </select>
          </div>
        </div>
        <h2>Endereço</h2>
        <div className={style.dadosIndividuais}>
          {/*CEP */}
          <div>
            <label htmlFor="CEP">CEP:</label>
            <input type="string" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCep(e.target.value)}
              value={cep} />

          </div>
          {/*End */}
          <div>
            <label htmlFor="End">Endereço:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value)}
              value={endereco} />
          </div>
          {/*Bairro */}
          <div>
            <label htmlFor="Bairro">Bairro:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBairro(e.target.value)}
              value={bairro} />
          </div>
          {/*Municipio */}
          <div>
            <label htmlFor="Municipio">Municipio:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMunicipio(e.target.value)}
              value={municipio} />
          </div>
          {/*Unidade Federal */}
          <div>
            <label htmlFor="UF">Unidade Federal:</label>
            <input type="text" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUnidadeFederal(e.target.value)}
              value={unidadeFederal} />
          </div>
        </div>
        <h2>Informações Sobre Batismo:</h2>
        <div className={style.dadosIndividuais}>

          {/*Data de Batismo */}
          <div>
            <label htmlFor="DatadeBatismo">Data de Batismo:</label>
            <input type="date" required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataDeBatismo(e.target.value)}
              value={dataDeBatismo} />
          </div>
          <div>
            <label htmlFor="IgrejadeBatismo">Igreja De Batismo:</label>
            <select name="igrejaDeBatismo" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setIgrejaDeBatismo(e.target.value)} value={igrejaDeBatismo}>
              <option value="">Selecione</option>
              <option value="Igreja Prentecostal Ponto De Oração">Igreja Pentecostal Ponto de Oração</option>
              <option value="Outra">Outra</option>
            </select>
          </div>
        </div>
        <button>Enviar Formulario</button>
      </form >
    </div >
  )
}

export default Membros
