import  { useEffect,  } from 'react'
import { useGetMembro } from '../../Hooks/useGetMembros'
import style from "./Membros.module.css";
import type { MembrosId } from '../../types/MembrosId';

const Membros = () => {
  const { getMembroFirestore, data, loading } = useGetMembro<MembrosId>()

  useEffect(() => {
    getMembroFirestore();
  }, []);


  return (
    <div>
      <table className={style.tabela}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nacionalidade</th>
            <th>Data Nascimento</th>
            <th>Naturalidade</th>
            <th>Nome do Pai</th>
            <th>Nome da Mãe</th>
            <th>Estado Civil</th>
            <th>Cônjuge</th>
            <th>CPF</th>
            <th>Cargo</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Município</th>
            <th>UF</th>
            <th>Igreja Batismo</th>
            <th>Data Batismo</th>
          </tr>
        </thead>
        {loading ? "carregando Tabela":'' }

        <tbody>
          {[...data].sort((a, b) => (a.name ?? "").localeCompare(b.name ?? "", "pt-BR")).map((membro) => (
            <tr key={membro.id}>
              <td>{membro.name}</td>
              <td>{membro.nacionalidade}</td>
              <td>{membro.dataDeNascimento}</td>
              <td>{membro.naturalidade}</td>
              <td>{membro.fatherName}</td>
              <td>{membro.motherName}</td>
              <td>{membro.estadoCivil}</td>
              <td>{membro.spouseName}</td>
              <td>{membro.cpf}</td>
              <td>{membro.cargo}</td>
              <td>{membro.cep}</td>
              <td>{membro.endereco}</td>
              <td>{membro.bairro}</td>
              <td>{membro.municipio}</td>
              <td>{membro.unidadeFederal}</td>
              <td>{membro.igrejaDeBatismo}</td>
              <td>{membro.dataDeBatismo}</td>
              <td><button>Visualizar</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Membros
