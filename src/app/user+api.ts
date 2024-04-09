import {ExpoResponse, ExpoRequest} from 'expo-router/server'

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const { email, password } = await request.json()


  if( email === "gabriel@gmail" && password === "123" ){
    return ExpoResponse.json({
      email,
      name: "Gabriel Oliveira",
    })
  }


  return new ExpoResponse("Usuario ou senha incorretos!",{
    status: 404,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
