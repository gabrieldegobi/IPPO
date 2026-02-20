import React, { useState } from "react";
import style from "./Membros.module.css";
import type { Membro } from "../../types/Membro";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/ConfigFirebase";








const Membros = () => {




  const [membro, setMembro] = useState<Membro>({

    name: '',
    nacionalidade: '',
    dataDeNascimento: '',
    naturalidade: '',
    fatherName: '',
    motherName: '',
    estadoCivil: '',
    spouseName: '',
    cpf: '',
    cargo: '',
    cep: '',
    endereco: '',
    bairro: '',
    municipio: '',
    unidadeFederal: '',
    igrejaDeBatismo: '',
    dataDeBatismo: ''

  })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "membros"), membro)

      alert("Membro cadastrado com sucesso!")
      //Limpando formulario
      setMembro({
        name: '',
        nacionalidade: '',
        dataDeNascimento: '',
        naturalidade: '',
        fatherName: '',
        motherName: '',
        estadoCivil: '',
        spouseName: '',
        cpf: '',
        cargo: '',
        cep: '',
        endereco: '',
        bairro: '',
        municipio: '',
        unidadeFederal: '',
        igrejaDeBatismo: '',
        dataDeBatismo: ''
      })
    }
    catch (error) {
      console.error("Erro ao salvar", error)
      alert("Erro ao cadastrar membro!")
    }

  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1>Ficha de Cadastro IPPO - JV</h1>
        <div className={style.dadosIndividuais}>
          {/*Nome */}
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, name: e.target.value })}
              value={membro.name} />
          </div>
          {/*Nacionalidade */}
          <div>
            <label htmlFor="Nacionalidade">Nacionalidade:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, nacionalidade: e.target.value })}
              value={membro.nacionalidade}
            />
          </div>
          {/*Data de Nascimento*/}
          <div>
            <label htmlFor="Birthday">Data de nascimento:</label>
            <input type="date" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, dataDeNascimento: e.target.value })}
              value={membro.dataDeNascimento} />
          </div>
          {/*Naturalidade */}
          <div>
            <label htmlFor="Naturalidade">Naturalidade:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, naturalidade: e.target.value })}
              value={membro.naturalidade} />
          </div>
          {/*Pai */}
          <div>
            <label htmlFor="Pai">Pai:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, fatherName: e.target.value })}
              value={membro.fatherName} />
          </div>
          {/*Mae */}
          <div>
            <label htmlFor="Mae">Mãe:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, motherName: e.target.value })}
              value={membro.motherName} />
          </div>
          {/*Estado Civil */}
          <div>
            <label htmlFor="EstadoCivil">Estado civil:</label>
            <select name="estadoCivil" id=""
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMembro({ ...membro, estadoCivil: e.target.value })} value={membro.estadoCivil}>
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
            <input type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, spouseName: e.target.value })}
              value={membro.spouseName} />
          </div>
          {/*CPF*/}
          <div>
            <label htmlFor="CPF">CPF:</label>
            <input type="text" maxLength={11} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, cpf: e.target.value })}
              value={membro.cpf} />
          </div>

          <div>
            <label htmlFor="cargo">Cargo:</label>
            <select name="Cargo" id=""
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMembro({ ...membro, cargo: e.target.value })}
              value={membro.cargo}>
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
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, cep: e.target.value })}
              value={membro.cep} />

          </div>
          {/*End */}
          <div>
            <label htmlFor="End">Endereço:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, endereco: e.target.value })}
              value={membro.endereco} />
          </div>
          {/*Bairro */}
          <div>
            <label htmlFor="Bairro">Bairro:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, bairro: e.target.value })}
              value={membro.bairro} />
          </div>
          {/*Municipio */}
          <div>
            <label htmlFor="Municipio">Municipio:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, municipio: e.target.value })}
              value={membro.municipio} />
          </div>
          {/*Unidade Federal */}
          <div>
            <label htmlFor="UF">Unidade Federal:</label>
            <input type="text" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, unidadeFederal: e.target.value })}
              value={membro.unidadeFederal} />
          </div>
        </div>
        <h2>Informações Sobre Batismo:</h2>
        <div className={style.dadosIndividuais}>

          {/*Data de Batismo */}
          <div>
            <label htmlFor="DatadeBatismo">Data de Batismo:</label>
            <input type="date" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMembro({ ...membro, dataDeBatismo: e.target.value })}
              value={membro.dataDeBatismo} />
          </div>
          <div>
            <label htmlFor="IgrejadeBatismo">Igreja De Batismo:</label>
            <select name="igrejaDeBatismo" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMembro({ ...membro, igrejaDeBatismo: e.target.value })} value={membro.igrejaDeBatismo}>
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
