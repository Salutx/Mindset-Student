import React from 'react'

const index = () => {
  
  
    return (
    <C.Container>
    <C.Label>MINDSET STUDENT</C.Label>
    <C.Content>
        <Input 
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input 
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <C.LabelError>{ error }</C.LabelError>

        <Button Text="Entrar" onClick={handleLogin} />
    </C.Content>
</C.Container>
  )
}

export default index