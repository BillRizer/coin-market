

# coin-market
codigo para o teste:
https://github.com/edusynch/frontend-challenge


### notas
Foi aplicado uma arquitetura de camadas, sendo 
- presentation: responsável pelos componentes gráficos
- application: pode parecer repetitivo, mas sua função é impedir a presentation de se acoplar na infrastructure, sendo usada também para aplicar regras de negócio.
- infrastructure: camada de abstração para fontes externas de dados ou recursos, como Rest,websocket, storage, cache .



### install and run
````bash
docker compose up -d
# this run frontend and backends application
````


## todo 
devido a alguns imprevisto nao conclui totalmente, porem segue a lista de coisas que estavam planejadas:

- Adicionar animacoes

- Adicionar teste de integracao com cypress ou React Test Library

- algumas pequenas correcoes de layout

- criar ambiente dev no docker



