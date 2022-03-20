import { createServer, Factory, Model, Response, ActiveModelSerializer} from 'miragejs'
//import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string
}

export function makeServer() {

    const server = createServer({
        serializers: {
            applicaton: ActiveModelSerializer,
        },
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories:{
            user: Factory.extend({
                name(i :number) {
                   return  `User ${i + 1}`   
                },
                email(i :number){
                    return `user.${i + 1}@teste.com`
                },
                createdAt(){
                   return new Date()     
                }
            })
        },

        seeds(server){
            server.createList('user', 205);        
        },
        routes(){
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users', function (schema, request){ 
                const {page     = 1, per_page = 5} = request.queryParams
                const total     = schema.all('user').length

                const pageStart = (Number(page) -1) * Number(per_page)
                const pageEnd   = pageStart + Number(per_page)

                // console.log('page ',page)
                // console.log('total ',total)
                // console.log('pageStart ',pageStart)
                // console.log('pageEnd ',pageEnd)

                const users = this.serialize(schema.all('user'))
                .users.slice(pageStart, pageEnd)

                return new Response(200, {'x-total-count': String(total)},
                 { users }
                )
            });       

            this.get('/users/:id');   
            this.post('/users');   
            
            this.namespace = '';
            this.passthrough();          
        }
    })

    return server;
}