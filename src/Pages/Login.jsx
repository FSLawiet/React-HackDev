import "./Login.css";

function Login() {
    return (
        <>
            <section class='Container__Formulario'>
                <h2 class='Formulario__Titulo'>Registrar</h2>
                <h3 class='Formulario__Titulo-Secundario'>
                    Preencha as informações abaixo:
                </h3>

                <div class='Formulario__Cadastro'>
                    <form action='#' class='Formulario__Dados'>
                        <div class='Formulario__Lista'>
                            <label class='Formulario__Label' for='nome'>
                                Nome completo
                            </label>
                            <input
                                class='Formulario__Input'
                                type='text'
                                id='nome'
                                name='nome'
                                placeholder='Nome '
                                required
                            />
                        </div>

                        <div class='Formulario__Lista'>
                            <label class='Formulario__Label' for='email'>
                                E-mail
                            </label>
                            <input
                                class='Formulario__Input'
                                type='email'
                                id='email'
                                name='email'
                                placeholder='E-mail'
                                required
                            />
                        </div>

                        <div class='Formulario__Lista'>
                            <label class='Formulario__Label' for='senha'>
                                Senha
                            </label>
                            <input
                                class='Formulario__Input'
                                type='password'
                                id='senha'
                                name='senha'
                                placeholder='Senha'
                                required
                            />
                        </div>

                        <div class='Formulario__Lista'>
                            <label class='Formulario__Label' for='celular'>
                                Celular
                            </label>
                            <input
                                class='Formulario__Input'
                                type='number'
                                id='celular'
                                name='celular'
                                placeholder='(xx) xxxx-xxxx'
                                required
                            />
                        </div>

                        <div class='Formulario__Botao'>
                            <input
                                class='Formulario__Botao-Input'
                                type='submit'
                                value='Criar conta'
                            />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;
