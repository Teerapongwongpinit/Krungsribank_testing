describe('postman create collection', () => {
    it('api create collection', () => {
        cy.request({
            method : 'POST',
            url : 'https://api.getpostman.com/collections?workspace=e3f660b4-14b6-4ccb-9563-e3e9ae7e7a18',
            headers : {
                'Content-Type' : 'application/json',
                'x-api-key' : 'PMAK-634e3671d86be2735a05918f-b00ec2f50ccc523d3e59a1ba43c6e53d45',
            },
            body : {
                "collection": {
                    "info": {
                        "name": "Test Collection",
                        "description": "This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.",
                        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
                    },
                    "item": [
                        {
                            "name": "Test GET Response",
                            "event": [
                                {
                                    "listen": "test",
                                    "script": {
                                        "id": "7d2334fc-a84a-4c3d-b26c-7529afa4c0ae",
                                        "exec": [
                                            "pm.test(\"Status code is 200\", function () {",
                                            "    pm.response.to.have.status(200);",
                                            "});"
                                            ],
                                        "type": "text/javascript"
                                        }
                                    }
                                ],
                            "request": {
                                "url": "https://echo.getpostman.com/headers",
                                "method": "GET",
                                "header": [
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        }).then((res)=>{
            expect(res.status).to.eq(200),
            expect(res.body.collection).to.have.property('name',Cypress.env('names',res.body.collection.name))
            expect(res.body.collection).to.have.property('id',Cypress.env('ID',res.body.collection.id))
            expect(res.body.collection).to.have.property('uid',Cypress.env('UID',res.body.collection.uid))
        })
    });
});