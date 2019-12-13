# Bem Vindo a Orga.Re | Um novo jeito de se Reorganizar 🗒

## Saiba mais:
### Como Surgiu?

A Orga.Re surgiu diante da necessidade de unificar informações necessárias para uma boa comunicação de um projeto, grupo e afins.

Através dela  o Administrador tem acesso de adicionar, alterar, excluir eventos, aulas e participantes confirmados  que vão de acordo como cronograma do projeto e disponibilizar as informações necessárias para o grupo, fazendo com que todos fiquem alinhados.

## Veja as rotas:

###Eventos:
- [x] ###VER TODOS OS EVENTOS- get ('', controller1.eventosAll)
- [x] #### ADICIONAR EVENTOS- post ('',autenticarAdmin, controller1.addEvento)
- [x] #### ATUALIZAR EVENTO- patch ('/:id',autenticarAdmin, controller1.update)
- [x] ##### DELETAR EVENTO- delete('/:id',autenticarAdmin,controller1.deletarEvento)
- [x] ##### ADICIONAR CONVIDADOS- post('/:eventoId/alunos', autenticarAdmin,controller1.addAluno)
- [x] ##### DELETAR CONVIDADOS-delete('/:eventoId/:alunoId',autenticarAdmin, controller1.deletarAluno)


###Aulas:
- [x] #### ADICONAR AULA- post ('', autenticarAdmin,controller.addAulas )
- [x] #### VER TODAS AS AULAS- get ('', controller.aulasAll)
- [x] #### ATUALIZAR AULA- patch ('/:id', autenticarAdmin, controller.update)
- [x] #### DELETAR AULA- delete('/:id',autenticarAdmin, controller.deletar)

###Administrador:
- [x] #### VER TODOS OS ADMIN- get('',autenticarAdmin,controller.adminAll)
- [x] #### ADICIONAR NOVO ADMIN- post('', controller.addAdmin)
- [x] #### DELETAR ADMIN -delete('/:id', autenticarAdmin, controller.remove)
- [x] #### ALTERAR ADMIN- patch ('/:id', autenticarAdmin, controller.update)
- [x] #### FAZER LOGIN - post('/login', controller.login)

###Futuras melhorias:
 
- [] Vincular os eventos as devidas semanas de aulas;
- [] Criar rota de presença dos alunos as aulas;
- [] Fazer GET de cada semana de aula. 
