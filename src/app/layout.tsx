import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Otimização de fontes
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Otimização de fontes
});

export const metadata: Metadata = {
  title: "TudoBônus - Eletrodomésticos com Desconto",
  description: "Compre eletrodomésticos com até 10% de desconto no PIX. Geladeiras, fogões, lavadoras e mais. Qualidade garantida!",
  keywords: "eletrodomésticos, desconto, geladeira, fogão, lavadora, ofertas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TudoBônus</title>
        <link rel="icon" href="assets/icons/favicon.ico" type="image/svg+xml">
    
        <!-- Otimização de Fontes -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Prompt:wght@400;500;600;700&display=swap" 
              rel="stylesheet" 
              media="print" 
              onload="this.media='all'">
    
        <!-- CSS otimizado -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
        
        <!-- CSS principal com preload -->
        <link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="/styles.css"></noscript>
    
        <!-- Critical CSS Inline -->
        <style>
            /* Critical CSS - Estilos essenciais para above-the-fold content */
            .critical-css {
                visibility: visible;
            }
            
            /* Otimizações de performance */
            * {
                box-sizing: border-box;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            
            /* Lazy loading styles */
            img[data-src] {
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            img.lazy-loaded {
                opacity: 1;
            }
            
            /* Otimizações de animações */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }
            
            /* Melhorias de performance para mobile */
            @media (max-width: 767px) {
                .carousel-hero-img {
                    width: 100%;
                    height: auto;
                }
                
                /* Remover sombras complexas em mobile */
                .custom-shadow {
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
            }
            
            /* Containment para melhor render performance */
            .card-produto, .classification-card {
                contain: layout style paint;
            }
            
            /* Scroll suave nativo */
            html {
                scroll-behavior: smooth;
            }
            
            /* Placeholder para imagens */
            .img-placeholder {
                background: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                font-size: 12px;
            }
        </style>
    </head>
    
    <body>
    
        <header>
            <nav class="">
                <p class="text-center h8 bg-primary text-white p-2">
                    GANHE 10% DE DESCONTO PAGANDO NO PIX COM O PAGUE NA ENTREGA
                </p>
    
                <!--  nao aparece no mobile a  div abaixo d-nome-->
                <div class="py-2 bg-secondary d-none d-md-block">
                    <div class="container">
                        <div
                            class="text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between w-100 text-center">
                            <span class="top-bar-highlight flex-grow-1 ">Pague somente na <strong>Entrega via
                                    PIX</strong></span>
                            <a href="#" class="top-bar-item text-decoration-none flex-grow-1 text-md-end">Precisa de
                                ajuda?</a>
                            <a href="#" class="top-bar-item text-decoration-none flex-grow-1 text-center">Dúvidas
                                frequentes</a>
                            <a href="#" class="top-bar-item text-decoration-none flex-grow-1 text-md-start">TudoBônus –
                                Empresas</a>
                            <span class="top-bar-highlight fw-bold flex-grow-1 text-md-end">
                                <strong>Televendas</strong>
                                <span class="fw-normal">(19) 4101-0001</span>
                            </span>
                        </div>
                    </div>
                </div>
    
                <!-- logo search avatar -->
    
                <div class="py-4">
                    <div class="container">
                        <!-- Topo compacto no mobile -->
                        <div class="row align-items-center justify-content-between d-md-none mb-3">
                            <div class="col-auto">
                                <button class="btn border-0 p-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
                                    <i class="bi bi-list custom-icon-menu"></i>
                                </button>
                            </div>
                            <div class="col text-center">
                                <a href="dashboard.html"><img src="assets/icons/Logotipo.svg" alt="TudoBônus"
                                        class="img-fluid" width="150" height="40"></a>
                            </div>
                            <div class="col-auto d-flex gap-3">
                                <a href="#" id="mobileUserIcon" data-bs-toggle="offcanvas" data-bs-target="#loginOffcanvas">
                                    <i class="bi bi-person text-primary fs-4"></i>
                                </a> <i class="bi bi-cart text-primary fs-4"></i>
                            </div>
                        </div>
    
                        <!-- Linha para tablets e desktop -->
                        <div class="row align-items-center d-none d-md-flex">
                            <!-- Logo -->
                            <div class="col-md-auto">
                                <a href="dashboard.html"><img src="assets/icons/Logotipo.svg" alt="TudoBônus" width="180" height="50" /></a>
                            </div>
    
                            <!-- Busca -->
                            <div class="col">
                                <form role="search">
                                    <div class="position-relative search-box-custom">
                                        <input type="text" class="form-control square-input"
                                            placeholder="QUAL PRODUTO VOCÊ ESTÁ PROCURANDO?" />
                                        <button type="submit"
                                            class="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom">
                                            <i class="bi bi-search fs-4"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
    
                            <!-- Usuário/Carrinho -->
    
                            <div class="col-md-auto text-end d-flex align-items-center">
                                <div class="dropdown">
    
                                    <a href="#" class="d-flex align-items-center gap-2 text-decoration-none"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-person text-primary fs-2"></i>
                                        <div class="small text-primary text-start">
                                            Olá! Entre ou<br />
                                            <span class="text-primary fw-semibold">crie a sua conta <i
                                                    class="bi bi-chevron-down"></i></span>
                                        </div>
                                    </a>
    
                                    <div class="dropdown-menu p-4 login-dropdown">
                                        <form>
                                            <div class="mb-3">
                                                <label for="loginEmail" class="form-label">Email ou CPF</label>
                                                <input type="email" class="form-control" id="loginEmail">
                                            </div>
                                            <div class="mb-3">
                                                <label for="loginPassword" class="form-label">Senha</label>
                                                <input type="password" class="form-control" id="loginPassword">
                                            </div>
                                            <div class="mb-3">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="rememberMe">
                                                    <label class="form-check-label" for="rememberMe">Lembrar-me</label>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary w-100">Entrar</button>
                                            <div class="text-center mt-3">
                                                <a href="#" class="small text-decoration-none">Esqueci minha senha</a>
                                            </div>
                                            <hr>
                                            <p class="text-center small mb-2">Ainda não tem conta?</p>
                                            <a href="#" class="btn btn-outline-secondary w-100">Cadastrar</a>
                                        </form>
                                    </div>
                                </div>
                                <a href="#" class="text-primary fs-3 ms-4"><i class="bi bi-cart"></i></a>
                            </div>
                        </div>
    
                        <!-- Campo de busca no mobile -->
                        <!-- Campo de busca: visível somente no mobile -->
                        <div class="row d-md-none">
                            <div class="col-12">
                                <form role="search">
                                    <div class="position-relative search-box-custom mt-2">
                                        <input type="text" class="form-control square-input "
                                            placeholder="QUAL PRODUTO VOCÊ ESTÁ PROCURANDO?" />
                                        <button type="submit"
                                            class="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom"
                                            tabindex="-1">
                                            <i class="bi bi-search fs-4"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- Departameto menu – escondido em tablet/mobile -->
                <div class="py-3 bg-tertiary d-none d-md-block">
                    <div class="container">
                        <div class="col-12">
                            <div class="d-flex align-items-center flex-nowrap justify-content-between gap-2 ">
                                <!-- O contêiner .dropdown é essencial para o funcionamento -->
                                <div class="dropdown" id="departamentos-dropdown">
                                    <button
                                        class="rounded-pill px-3 px-md-4  fw-semibold d-flex align-items-center bg-white border-0"
                                        type="button" id="departamentos-btn" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="bi bi-list   me-1 custom-icon-menu" id="departamentos-icon"></i>
                                        <span class="menu-link p-0">DEPARTAMENTOS</span>
                                    </button>
                                    <!-- O Mega Menu que será aberto -->
                                    <div class="dropdown-menu mega-menu p-4">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <p class="text-primary fw-bold h6">ELETRODOMÉSTICOS</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Refrigeradores</a></li>
                                                    <li><a class="dropdown-item" href="#">Fogões</a></li>
                                                    <li><a class="dropdown-item" href="#">Lavar e Secar</a></li>
                                                    <li><a class="dropdown-item" href="#">Microondas</a></li>
                                                </ul>
                                                <p class="text-primary fw-bold mt-3 h6">PEÇAS E ACESSÓRIOS</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Peças de reposição</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <p class="text-uppercase fw-bold h6">Geladeira</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Todas as geladeiras</a></li>
                                                    <li><a class="dropdown-item" href="#">Brastemp</a></li>
                                                    <li><a class="dropdown-item" href="#">Consul</a></li>
                                                </ul>
                                                <p class="text-uppercase fw-bold mt-3 h6">Freezer</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Todos os freezers</a></li>
                                                    <li><a class="dropdown-item" href="#">Horizontal</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <p class="text-uppercase fw-bold h6">Frigobar</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Todos os frigobares</a></li>
                                                    <li><a class="dropdown-item" href="#">Consul</a></li>
                                                </ul>
                                                <p class="text-uppercase fw-bold mt-3 h6">Cervejeira</p>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Todas as cervejeiras</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <a href="categoria.html" class="menu-link p-0">ELETRODOMÉSTICOS</a>
                                <a href="#" class="menu-link p-0">MAIS VENDIDOS</a>
                                <a href="#" class="menu-link p-0">OFERTAS IMPECÁVEIS</a>
                                <a href="#" class="menu-link p-0">MELHORES OPORTUNIDADES</a>
                            </div>
    
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    
        <main>
            <!-- Section carrocel -->
            <section class=" container-fluid px-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators d-flex ">
                        <div class="d-flex custom-icon-carousel ">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1">
                                <i class="bi bi-circle-fill"></i>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2">
                                <i class="bi bi-circle-fill"></i>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3">
                                <i class="bi bi-circle-fill"></i>
                            </button>
    
                        </div>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="assets/banner1.png" class="d-none d-md-block  w-100 carousel-hero-img" alt="imagem" width="1200" height="400" />
                            <img src="assets/bannerMobile1.png" class="d-block d-md-none w-100 carousel-hero-img img-fluid"
                                alt="imagem mobile" width="600" height="300" />
    
                        </div>
                        <div class="carousel-item">
    
                            <img src="assets/banner1.png" class="d-none d-md-block  w-100 carousel-hero-img" alt="imagem" width="1200" height="400" />
                            <img src="assets/bannerMobile1.png" class="d-block d-md-none w-100 carousel-hero-img img-fluid"
                                alt="imagem mobile" width="600" height="300" />
    
                        </div>
    
                        <div class="carousel-item">
                            <img src="assets/banner1.png" class="d-none d-md-block  w-100 carousel-hero-img" alt="imagem" width="1200" height="400" />
                            <img src="assets/bannerMobile1.png" class="d-block d-md-none w-100 carousel-hero-img img-fluid"
                                alt="imagem mobile" width="600" height="300" />
    
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <img src="assets/icons/Arrowleft-circle.svg" alt="" width="40" height="40">
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <img src="assets/icons/Arrowright-circle.svg" alt="" width="40" height="40">
                        <span class="visually-hidden">Próximo</span>
                    </button>
                </div>
            </section>
    
            <!-- Section Regua-->
            <section class="py-5 ">
                <div class="container">
                    <div class="row justify-content-center">
    
                        <div class="col-12 col-lg-11">
    
                            <div class="d-flex no-wrap-scroll" id="categoriaRegua">
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/refrigerador.png" alt="Refrigerador"
                                                class="img-fluid Retangulo" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500">Refrigerador</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/lavadora.png" alt="Lavadora" class="img-fluid Lavadora" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Lavadora</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/fogao.png" alt="Fogão" class="img-fluid Fogao" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Fogão</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/coifa.png" alt="Coifa" class="img-fluid Cofia" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Coifa</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/lavalouca.png" alt="Lava-louça" class="img-fluid LavaLouca" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Lava-louça</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/forno.png" alt="Forno" class="img-fluid Forno" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Forno</span>
                                    </a>
                                </div>
    
                                <div class="text-center ruler-item">
                                    <a href="#" class="category-link">
                                        <div
                                            class="categoria-circle d-inline-flex align-items-center justify-content-center rounded-circle custom-shadow">
                                            <img src="assets/micro.png" alt="Micro-ondas" class="img-fluid MicroOndas" width="60" height="60" />
                                        </div>
                                        <span class="mt-2 d-block fw-medium bg-bark-500 ">Micro-ondas</span>
                                    </a>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    
            <!-- Melhores oportunidades para você ok -->
            <section class="py-5">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-12">
                            <div class="row justify-content-center mb-5">
                                <div class="col-12 d-flex justify-content-between align-items-center">
                                    <p class="fw-bold mb-0 h3">
                                        Melhores </span><br class="d-md-none"> <span
                                            class="text-bg-button">oportunidades</span><br class="d-md-none"> para você
                                    </p>
                                    <div class="d-flex">
                                        <button id="prevBtn"
                                            class=" rounded-circle custom-btn-circule custom-rounded-circle-left ">
                                            <i class="bi bi-arrow-left-short fs-4"></i>
                                        </button>
                                        <button id="nextBtn" class="btn bg-button rounded-circle custom-btn-circule ms-3">
                                            <i class="bi bi-arrow-right-short fs-4 text-white fw-bold"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-3 d-none d-lg-block p-4 custom-filtro">
    
                                    <div class="d-flex flex-column gap-3 filter-list">
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Refrigerador</span>
                                            <span
                                                class="badge bg-dark custom-badge-icon d-flex align-items-center justify-content-center">15</span>
                                        </a>
    
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark filter-active">
                                            <span class="h6">Fogão</span>
                                            <span
                                                class="badge bg-success text-black custom-badge-icon d-flex align-items-center justify-content-center">35</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark ">
                                            <span class="h6">Lavadora</span>
                                            <span
                                                class="badge bg-primary-new custom-badge-icon d-flex align-items-center justify-content-center">10</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Forno</span>
                                            <span
                                                class="badge bg-gray-ligth text-dark custom-badge-icon d-flex align-items-center justify-content-center">8</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark ">
                                            <span class="h6">Micro-ondas</span>
                                            <span
                                                class="badge bg-warning text-black custom-badge-icon d-flex align-items-center justify-content-center">2</span>
                                        </a>
    
                                    </div>
                                </div>
    
                                <div class="col-12 col-lg-9">
                                    <div class="position-relative">
                                        <div class="d-flex overflow-hidden gap-4 " id="cardList">
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria excelente
                                                            </p>
                                                            <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira3.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h6">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria muito Bom
                                                            </p>
                                                            <p class="rounded-circle bg-primary-new circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira1.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria excelente
                                                            </p>
                                                            <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira3.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria excelente
                                                            </p>
                                                            <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/maquinalavar.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h3">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
    
    
            <!-- A classificação dos nossos produtos ok -->
            <section class="py-5 ">
                <div class="container-xxl">
    
                    <div class="d-flex justify-content-between align-items-center mb-5 ">
                        <p class="fw-bold  h3">A
                            <span class="text-bg-button ">classificação</span> dos <br class="d-md-none">
                            nossos produtos
                        </p>
                        <div class="d-flex gap-2 ">
                            <button class=" rounded-circle custom-btn-circule custom-rounded-circle-left "
                                id="prevBtnClassif">
                                <i class="bi bi-arrow-left-short fs-4"></i>
                            </button>
                            <button class="btn bg-button rounded-circle custom-btn-circule ms-3" id="nextBtnClassif">
                                <i class="bi bi-arrow-right-short fs-4 text-white fw-bold"></i>
                            </button>
                        </div>
                    </div>
    
                    <div class="horizontal-scroll-container " id="cardListClassif">
                        <div class="d-flex gap-4 ">
    
                            <div class="classification-card bg-secondary rounded-4 shadow-sm p-4 d-flex flex-column">
                                <div class="d-flex justify-content-between">
                                    <span class="h5 fw-bold">Excelente</span>
                                    <span class="rounded-circle bg-success circle-custom"></span>
                                </div>
                                <ul class="list-unstyled">
                                    <li>• 100% Funcional</li>
                                    <li>• Garantia de 6 meses</li>
                                    <li>• Totalmente Revisado</li>
                                    <li>• Limpeza Antibactericida</li>
                                    <li>• Detalhes Imperceptíveis</li>
                                </ul>
                                <div class="mt-auto text-center">
                                    <a href="classificacao.html">
    
                                        <button
                                            class="btn btn-info text-white rounded-pill fw-semibold d-flex align-items-center justify-content-center btn-fixed-width"
                                            type="button">
                                            <span>Conheça</span>
                                            <i class="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </a>
    
                                </div>
                            </div>
    
                            <div class="classification-card bg-secondary rounded-4 shadow-sm p-4 d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="h5 fw-bold">Muito Bom</span>
                                    <span class="rounded-circle bg-primary-sec circle-custom"></span>
                                </div>
                                <ul class="list-unstyled">
                                    <li>• 100% Funcional</li>
                                    <li>• Garantia de 6 meses</li>
                                    <li>• Totalmente Revisado</li>
                                    <li>• Limpeza Antibactericida</li>
                                    <li>• Detalhes Imperceptíveis</li>
                                </ul>
                                <div class="mt-auto text-center">
                                    <a href="classificacao.html">
                                        <button
                                            class="btn btn-info text-white rounded-pill fw-semibold d-flex align-items-center justify-content-center btn-fixed-width"
                                            type="button">
                                            <span>Conheça</span>
                                            <i class="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
    
                            <div class="classification-card bg-secondary rounded-4 shadow-sm p-4 d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="h5 fw-bold">Bom</span>
                                    <span class="rounded-circle bg-gray-sec circle-custom"></span>
                                </div>
                                <ul class="list-unstyled">
                                    <li>• 100% Funcional</li>
                                    <li>• Garantia de 6 meses</li>
                                    <li>• Totalmente Revisado</li>
                                    <li>• Limpeza Antibactericida</li>
                                    <li>• Detalhes Imperceptíveis</li>
                                </ul>
                                <div class="mt-auto text-center">
                                    <a href="categoria.html">
    
                                        <button
                                            class="btn btn-info text-white rounded-pill fw-semibold d-flex align-items-center justify-content-center btn-fixed-width"
                                            type="button">
                                            <span>Conheça</span>
                                            <i class="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
    
                            <div class="classification-card bg-secondary rounded-4 shadow-sm p-4 d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="h5 fw-bold">Regular</span>
                                    <span class="rounded-circle bg-primary-new circle-custom"></span>
                                </div>
                                <ul class="list-unstyled">
                                    <li>• 100% Funcional</li>
                                    <li>• Garantia de 6 meses</li>
                                    <li>• Totalmente Revisado</li>
                                    <li>• Limpeza Antibactericida</li>
                                    <li>• Detalhes Imperceptíveis</li>
                                </ul>
                                <div class="mt-auto text-center">
                                    <a href="categoria.html">
                                        <button
                                            class="btn btn-info text-white rounded-pill fw-semibold d-flex align-items-center justify-content-center btn-fixed-width"
                                            type="button">
                                            <span>Conheça</span>
                                            <i class="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
    
                            <div class="classification-card bg-secondary rounded-4 shadow-sm p-4 d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="h5 fw-bold">Novo</span>
                                    <span class="rounded-circle bg-yellow circle-custom"></span>
                                </div>
                                <ul class="list-unstyled">
                                    <li>• 100% Funcional</li>
                                    <li>• Garantia de 6 meses</li>
                                    <li>• Totalmente Revisado</li>
                                    <li>• Limpeza Antibactericida</li>
                                    <li>• Detalhes Imperceptíveis</li>
                                </ul>
                                <div class="mt-auto text-center">
    
                                    <a href="classificacao.html">
                                        <button
                                            class="btn btn-info text-white rounded-pill fw-semibold d-flex align-items-center justify-content-center btn-fixed-width"
                                            type="button">
                                            <span>Conheça</span>
                                            <i class="bi bi-arrow-right ms-2"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </section>
    
            <!-- Melhores ofertas por categoria  ok -->
    
            <section class="py-5">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-12">
                            <div class="row justify-content-center mb-5">
                                <div class="col-12 d-flex justify-content-between align-items-center">
                                    <p class="fw-bold mb-0 h3">
                                        Melhores </span><br class="d-md-none"> <span
                                            class="text-bg-button">ofertas</span><br class="d-md-none"> por categoria
                                    </p>
                                    <div class="d-flex gap-2">
                                        <button id="prevBtnOfertas"
                                            class=" rounded-circle custom-btn-circule custom-rounded-circle-left ">
                                            <i class="bi bi-arrow-left-short fs-4"></i>
                                        </button>
                                        <button id="nextBtnOfertas"
                                            class="btn bg-button rounded-circle custom-btn-circule ms-3">
                                            <i class="bi bi-arrow-right-short fs-4 text-white fw-bold"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-3 d-none d-lg-block p-4 custom-filtro">
    
                                    <div class="d-flex flex-column gap-3 filter-list">
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Muito Bom</span>
                                            <span
                                                class="badge bg-dark custom-badge-icon d-flex align-items-center justify-content-center">15</span>
                                        </a>
    
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark filter-active">
                                            <span class="h6">Excelente</span>
                                            <span
                                                class="badge bg-success text-dark h6 align-content-center custom-badge-icon d-flex align-items-center justify-content-center">35</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Regular</span>
                                            <span
                                                class="badge bg-primary-new custom-badge-icon d-flex align-items-center justify-content-center">10</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Bom</span>
                                            <span
                                                class="badge bg-gray-ligth text-dark custom-badge-icon d-flex align-items-center justify-content-center">8</span>
                                        </a>
    
                                        <a href="#"
                                            class="d-flex align-items-center justify-content-between w-75 h6 text-decoration-none text-dark">
                                            <span class="h6">Novo</span>
                                            <span
                                                class="badge bg-warning text-black custom-badge-icon d-flex align-items-center justify-content-center">2</span>
                                        </a>
    
                                    </div>
                                </div>
    
                                <div class="col-12 col-lg-9">
                                    <div class="position-relative">
                                        <div class="d-flex overflow-hidden gap-4 " id="cardListOfertas">
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria Bom
                                                            </p>
                                                            <p class="rounded-circle bg-gray-700 circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira1.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Fogão Electrolux<br>4 bocas prata
                                                        Efficient<br>com
                                                        Mesa de Vidro</p>
                                                    <p class="text-muted text-decoration-line-through mb-0 h7">R$
                                                        R$ 2.249,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ R$ 1.549,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 154,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 1.394,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria muito Bom
                                                            </p>
                                                            <p class="rounded-circle bg-primary-new circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira3.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h6">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
    
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria excelente
                                                            </p>
                                                            <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/maquinalavar.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
    
    
    
                                            <div class="flex-shrink-0 card-produto">
                                                <div
                                                    class="bg-white border rounded shadow-sm p-3 custom-card d-flex justify-content-center align-content-center">
                                                    <div class="d-flex flex-column align-items-end">
                                                        <div
                                                            class="d-flex justify-content-center align-items-center mb-3 align-self-end">
                                                            <p class="text-black fw-bold h6 pe-1 mb-0">Categoria excelente
                                                            </p>
                                                            <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                        </div>
    
                                                        <img data-src="assets/geladeira3.svg" 
                                                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                             class="img-fluid img-produto-card lazy"
                                                             alt="Geladeira Electrolux"
                                                             width="200" height="200">
                                                    </div>
                                                </div>
                                                <div class="text-start mt-3">
                                                    <p class="fw-medium h6">Geladeira Electrolux<br>Frost Free Inverter
                                                        590L<br>AutoSense 3 Portas</p>
                                                    <p class="text-muted  text-decoration-line-through mb-0 h7">R$
                                                        7.899,00
                                                    </p>
                                                    <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                                    <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros
                                                    </p>
                                                    <p class="h6">ou <strong>R$ 6.299,10</strong> no PIX</p>
                                                    <button
                                                        class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                        type="button">
                                                        <i class="bi bi-cart3 me-2"></i>
                                                        <span>Comprar</span>
                                                    </button>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
    
    
            <!-- Produtos mais vendidos da loja ok -->
    
            <section class="py-5 bg-light">
                <div class="container ">
                    <div class="row">
    
                        <div class="row justify-content-center mb-5">
                            <div class="col-12 d-flex justify-content-between align-items-center ">
                                <p class="fw-bold mb-0 h3 ">
                                    Produtos mais <br class="d-md-none"> <span class="text-bg-button">vendidos</span> da
                                    loja
                                </p>
                                <div class="d-flex">
                                    <button id="prevBtnMaisVendidos"
                                        class=" rounded-circle custom-btn-circule custom-rounded-circle-left ">
                                        <i class="bi bi-arrow-left-short fs-4"></i>
                                        <button id="nextBtnMaisVendidos"
                                            class="btn bg-button rounded-circle custom-btn-circule ms-3">
                                            <i class="bi bi-arrow-right-short fs-4 text-white fw-bold"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
    
    
                        <!-- Carrossel de cards ocupa o restante das colunas -->
    
                        <div class="col-12">
                            <div class="position-relative">
                                <div class="d-flex overflow-hidden gap-4" id="cardListMaisVendidos">
    
                                    <div class="flex-shrink-0 card-produto">
                                        <div class="bg-white border rounded shadow-sm p-3">
                                            <div class="d-flex flex-column align-items-center">
    
                                                <div
                                                    class="d-flex justify-content-end align-items-center align-self-stretch gap-2">
                                                    <p class="text-black fw-bold h6 mb-0">Categoria excelente</p>
                                                    <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                </div>
    
    
                                                <img data-src="assets/geladeira1.svg" 
                                                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                     class="img-fluid img-produto-card lazy"
                                                     alt="Geladeira Electrolux"
                                                     width="200" height="200">
                                            </div>
                                        </div>
                                        <div class="text-start mt-3">
                                            <p class="fw-medium h6">Fogão Electrolux <br>
                                                4 bocas prata Efficient <br>
                                                com Mesa de Vidro</p>
                                            <p class="text-muted text-decoration-line-through mb-0 h7">R$ 7.899,00</p>
                                            <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                            <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros</p>
                                            <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
    
                                            <a href="produtos.html" class="text-decoration-none">
                                                <button
                                                    class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                    type="button">
                                                    <i class="bi bi-cart3 me-2"></i>
                                                    <span>Comprar</span>
                                                </button>
                                            </a>
    
                                        </div>
                                    </div>
    
                                    <div class="flex-shrink-0 card-produto">
                                        <div class="bg-white border rounded shadow-sm p-3">
                                            <div class="d-flex flex-column align-items-center">
    
                                                <div
                                                    class="d-flex justify-content-end align-items-center align-self-stretch gap-2">
                                                    <p class="text-black fw-bold h6 mb-0">Categoria excelente</p>
                                                    <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                </div>
    
                                                <img data-src="assets/geladeira3.svg" 
                                                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                     class="img-fluid img-produto-card lazy"
                                                     alt="Geladeira Electrolux"
                                                     width="200" height="200">
                                            </div>
                                        </div>
                                        <div class="text-start mt-3">
                                            <p class="fw-medium h6">Fogão Electrolux <br>
                                                4 bocas prata Efficient <br>
                                                com Mesa de Vidro</p>
                                            <p class="text-muted text-decoration-line-through mb-0 h7">R$ 7.899,00</p>
                                            <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                            <p class="mb-1 h6">em até <strong>10x de R$ 699,90</strong> sem juros</p>
                                            <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
    
                                            <a href="produtos.html" class="text-decoration-none">
                                                <button
                                                    class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                    type="button">
                                                    <i class="bi bi-cart3 me-2"></i>
                                                    <span>Comprar</span>
                                                </button>
                                            </a>
    
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 card-produto">
                                        <div class="bg-white border rounded shadow-sm p-3">
                                            <div class="d-flex flex-column align-items-center">
                                                <div
                                                    class="d-flex justify-content-end align-items-center align-self-stretch gap-2">
                                                    <p class="text-black fw-bold h6 mb-0">Categoria excelente</p>
                                                    <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                </div>
    
                                                <img data-src="assets/maquinalavar.svg" 
                                                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                     class="img-fluid img-produto-card lazy"
                                                     alt="Geladeira Electrolux"
                                                     width="200" height="200">
                                            </div>
                                        </div>
                                        <div class="text-start mt-3">
                                            <p class="fw-medium h6">Fogão Electrolux <br>
                                                4 bocas prata Efficient <br>
                                                com Mesa de Vidro</p>
                                            <p class="text-muted text-decoration-line-through mb-0 h7">R$ 7.899,00</p>
                                            <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                            <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros</p>
                                            <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
    
                                            <a href="produtos.html" class="text-decoration-none">
                                                <button
                                                    class="bg-by border-0 text-white rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                    type="button">
                                                    <i class="bi bi-cart3 me-2"></i>
                                                    <span>Comprar</span>
                                                </button>
                                            </a>
    
                                        </div>
                                    </div>
    
    
                                       <div class="flex-shrink-0 card-produto">
                                        <div class="bg-white border rounded shadow-sm p-3">
                                            <div class="d-flex flex-column align-items-center">
                                                <div
                                                    class="d-flex justify-content-end align-items-center align-self-stretch gap-2">
                                                    <p class="text-black fw-bold h6 mb-0">Categoria excelente</p>
                                                    <p class="rounded-circle bg-success circle-custom mb-0"></p>
                                                </div>
    
                                                <img data-src="assets/maquinalavar.svg" 
                                                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"
                                                     class="img-fluid img-produto-card lazy"
                                                     alt="Geladeira Electrolux"
                                                     width="200" height="200">
                                            </div>
                                        </div>
                                        <div class="text-start mt-3">
                                            <p class="fw-medium h6">Fogão Electrolux <br>
                                                4 bocas prata Efficient <br>
                                                com Mesa de Vidro</p>
                                            <p class="text-muted text-decoration-line-through mb-0 h7">R$ 7.899,00</p>
                                            <p class="fw-bolder mb-1 h4">R$ 6.999,00</p>
                                            <p class="mb-1 h7">em até <strong>10x de R$ 699,90</strong> sem juros</p>
                                            <p class="h7">ou <strong>R$ 6.299,10</strong> no PIX</p>
    
                                            <a href="produtos.html" class="text-decoration-none">
                                                <button
                                                    class=" bg-by border-0 text-white border-0 rounded-pill mt-4 px-5 py-2 fw-semibold d-flex justify-content-center align-items-center"
                                                    type="button">
                                                    <i class="bi bi-cart3 me-2"></i>
                                                    <span>Comprar</span>
                                                </button>
                                            </a>
    
                                        </div>
                                    </div>
    
    
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                </div>
            </section>
    
            <!-- Imagens banner -->
    
            <section class="py-4">
                <div class="container">
                    <div class="row  g-1">
    
                        <!-- Imagem 1 -->
                        <div class="col-12 col-md-3 text-center text-md-start">
                            <img src="assets/subbanner4.svg" class="img-fluid object-fit-md-cover object-fit-cover "
                                alt="Imagem descritiva 1" width="300" height="150">
                        </div>
    
                        <!-- Imagem 2 -->
                        <div class="col-12 col-md-3 text-center text-md-start">
                            <img src="assets/subbanner1.svg" class="img-fluid object-fit-md-cover object-fit-cover "
                                alt="Imagem descritiva 2" width="300" height="150">
                        </div>
    
                        <!-- Imagem 3 -->
                        <div class="col-12 col-md-3 text-center text-md-start">
                            <img src="assets/subbanner3.svg" class="img-fluid object-fit-md-cover object-fit-cover  "
                                alt="Imagem descritiva 3" width="300" height="150">
                        </div>
    
                        <!-- Imagem 4 -->
                        <div class="col-12 col-md-3 text-center text-md-start">
                            <img src="assets/subbanner2.svg"
                                class="img-fluid img-fluid object-fit-md-cover object-fit-cover " alt="Imagem descritiva 4" width="300" height="150">
                        </div>
    
                    </div>
                </div>
            </section>
    
            <!-- Procurando aquele produto -->
            <section class="py-5 bg-light">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-12 ps-4">
                            <div class="bg-primary text-white px-3 px-md-5 py-5 rounded-3 position-relative">
    
                                <div class="position-absolute top-0 start-50 translate-middle-x custom-triangle-container">
                                    <div class="triangulo-simples"></div>
                                </div>
    
                                <div class="row justify-content-around align-items-center custom-title-help">
                                    <div class="col-12 col-md-5 mb-4 mb-md-0">
                                        <p class="fw-bold h3 fs-md-1 text-white text-center text-md-start">
                                            Procurando aquele
                                            <br class="d-md-none"> produto
                                            <br class="d-none d-md-block"> com desconto?
                                        </p>
                                    </div>
                                    <div class="col-12 col-md-6  bg-grayhelp-700 rounded-3  custom-help-mobile">
                                        <div class="bg-light rounded p-4">
    
                                            <div class="bg-white border rounded-pill p-1 mb-3">
                                                <div class="input-group">
                                                    <span class="input-group-text bg-transparent border-0 ">
                                                        <i class="bi bi-search"></i>
                                                    </span>
                                                    <input type="text"
                                                        class="form-control bg-transparent border-0 shadow-none custom-input-help"
                                                        placeholder="Busque o seu produto do sonhos aqui!" />
                                                </div>
                                            </div>
    
                                            <button class="btn bg-button text-white w-100 rounded-pill fw-semibold h6">
                                                Buscar
                                            </button>
    
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        </main>
    
        <footer>
            <div class="bg-secondary py-5">
                <div class="container">
                    <div class="row mb-4">
                        <div class="col text-center text-md-start">
                            <img src="assets/icons/Logotipo.svg" alt="TudoBônus" width="150" height="40">
                        </div>
                    </div>
    
                    <div class="row align-content-start justify-content-between">
                        <!-- Coluna 1: TudoBônus -->
                        <div class="col-12 col-lg-2 order-1 order-lg-1 text-center text-md-start">
                            <p class="fw-bold text-dark h5">TudoBônus</p>
                            <ul class="list-unstyled footer-links footer-links-spaced">
                                <li><a href="#" class="text-dark text-decoration-none">Quem somos</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Por que TudoBônus</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Patrocinadores</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Selos de classificação</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">ShowRoom - Cabreúva</a></li>
                            </ul>
                        </div>
                        <!-- Coluna 2: Categorias -->
                        <div class="col-12 col-lg-2 order-1 order-lg-1 text-center text-md-start">
                            <p class="fw-bold text-dark h5">Categorias</p>
                            <ul class="list-unstyled footer-links footer-links-spaced">
                                <li><a href="#" class="text-dark text-decoration-none">Excelente</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Muito Bom</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Bom</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Regular</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Novo</a></li>
                            </ul>
                        </div>
                        <!-- Coluna 3: Atendimento (troca de lugar com Ajuda) -->
                        <div class="col-12 col-lg-2 order-1 order-lg-1 text-center text-md-start">
                            <p class="fw-bold text-dark h5">Atendimento</p>
                            <ul class="list-unstyled footer-links footer-links-spaced">
                                <li><a href="#" class="text-dark text-decoration-none">Assistência na compra</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Assistência técnica</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">TudoBônus Empresas</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Imprensa</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Parcerias</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Minha entrega?</a></li>
                            </ul>
                        </div>
                        <!-- Coluna 4: Ajuda e Suporte (troca de lugar com Atendimento) -->
                        <div class="col-12 col-lg-2 order-1 order-lg-1 text-center text-md-start">
                            <p class="fw-bold text-dark h5">Ajuda e Suporte</p>
                            <ul class="list-unstyled footer-links footer-links-spaced">
                                <li><a href="#" class="text-dark text-decoration-none">Fale com a gente</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Dúvidas frequentes</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Garantia e devolução</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Política de privacidade</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Termo de compra e venda</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Venda</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Mapa do site</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Faq</a></li>
                            </ul>
                        </div>
                        <!-- Coluna 5: Redes Sociais -->
                        <div class="col-12 col-lg-2 order-5 order-lg-5 mt-4 mt-lg-0">
                            <div class="d-flex justify-content--md-start align-content-md-start  d-flex justify-content-center justify-content-md-start">
    
                                <p class="fw-bold text-dark h5 ">Redes Sociais</p>
    
                            </div>
                            <div class="d-flex gap-4 fs-2 d-flex justify-content-center justify-content-md-start ">
                                <a href="https://www.facebook.com/tudobonus/" class="text-dark"><i
                                        class="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/tudobonus/" class="text-dark"><i
                                        class="bi bi-instagram"></i></a>
                                <a href="https://www.tiktok.com/@tudobonus?lang=en" class="text-dark"><i
                                        class="bi bi-tiktok"></i></a>
                                <a href="https://www.youtube.com/channel/UCIThu2DEZrdUgPZMlI8by4w" class="text-dark"><i
                                        class="bi bi-youtube"></i></a>
                            </div>
                        </div>
                    </div>
    
                    <hr class="my-4">
                    <div class="row align-items-center pt-4">
                        <div class="col-lg-6">
                            <p class="fw-bold mb-2 text-dark h5 d-flex justify-content-center justify-content-md-start ">Formas de pagamento</p>
                            <div class=" d-flex d-flex justify-content-center justify-content-md-start">
                            <img src="assets/icons/Visa.svg" alt="Visa" class="me-2" width="40" height="25">
                            <img src="assets/icons/Mastercard.svg" alt="Mastercard" class="me-2" width="40" height="25">
                            <img src="assets/icons/American Express.svg" alt="Amex" class="me-2" width="40" height="25">
                            <img src="assets/icons/Discover.svg" alt="Discover" class="me-2" width="40" height="25">
                            <img src="assets/icons/Diners Club.svg" alt="Diners Club" class="me-2" width="40" height="25">
                            </div>
                        </div>
                        <hr class="my-4 d-md-none">
                        <div class="col-lg-6 text-lg-end pt-3 d-flex flex-column ">
                            <p class="fw-bold mb-2 text-dark h5 d-flex justify-content-center justify-content-md-end ">Segurança</p>
                            <div class="d-flex justify-content-center justify-content-md-end">
                                <img src="assets/seguracompra.png" alt="Compra Segura" class="img-fluid w-25 " width="120" height="60">
                            </div>
                        </div>
                    </div>
                    <hr class="my-4">
                    <div class="row  text-secondary mt-3 mb-2 py2 custom-p">
                        <div class="col-12">
    
                            <p class="py-3">Todos os preços e condições comerciais estão sujeitos a alteração sem aviso
                                prévio.
                                O preço válido será garantido após a finalização da compra. A simples inclusão de produtos
                                no
                                "carrinho de compras" não implica em sua reserva pelo consumidor.</p>
                            <p>
                                Nosso showroom apresenta apenas uma seleção de nossos produtos e não a linha completa
                                disponível em nosso site. <br>
                                Se deseja ver pessoalmente um item específico,
                                entre em contato conosco previamente pelo WhatsApp para confirmar
                                sua disponibilidade. Teremos o maior prazer em atender você da melhor forma <br> possível!
                                Fale
                                conosco pelo WhatsApp: (19) 4101-0001
                            </p>
                            <p class="py-3">PLATAFORMA CIRCULAR MARKETPLACE LTDA.<br>
                                CNPJ: 30.736.687/0001-99 - Inscrição Estadual: 233.050.374.112<br>
                                Rodovia Dom Gabriel Paulino Bueno Couto, 1800, setor 02 13317-204 - Cabreúva/SP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="bg-dark text-white text-center small">
                <div class="container py-3">
                    <p class="mb-0">&copy; Copyright © TudoBônus E-Commerce Ltda.® 2025 - Todos os Direitos Reservados</p>
                </div>
            </div>
        </footer>
    
    
        <!-- Scripts otimizados no final do body -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
                defer></script>
                
        <!-- Nosso script principal com defer -->
        <script src="scripts.js" defer></script>
    
        <!-- Script de otimização inline -->
        <script>
            // Script de otimização para carregamento rápido
            document.addEventListener('DOMContentLoaded', function() {
                // Lazy loading para imagens
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                if (img.dataset.src) {
                                    img.src = img.dataset.src;
                                    img.classList.remove('lazy');
                                    img.classList.add('lazy-loaded');
                                }
                                imageObserver.unobserve(img);
                            }
                        });
                    }, {
                        rootMargin: '50px 0px',
                        threshold: 0.1
                    });
    
                    document.querySelectorAll('img[data-src]').forEach(img => {
                        imageObserver.observe(img);
                    });
                }
    
                // Scroll horizontal otimizado
                const scrollConfigs = [
                    { listId: 'cardList', prevId: 'prevBtn', nextId: 'nextBtn' },
                    { listId: 'cardListClassif', prevId: 'prevBtnClassif', nextId: 'nextBtnClassif' },
                    { listId: 'cardListOfertas', prevId: 'prevBtnOfertas', nextId: 'nextBtnOfertas' },
                    { listId: 'cardListMaisVendidos', prevId: 'prevBtnMaisVendidos', nextId: 'nextBtnMaisVendidos' }
                ];
    
                scrollConfigs.forEach(config => {
                    const list = document.getElementById(config.listId);
                    const prevBtn = document.getElementById(config.prevId);
                    const nextBtn = document.getElementById(config.nextId);
    
                    if (list && prevBtn && nextBtn) {
                        const scrollAmount = 300;
                        
                        const smoothScroll = (element, amount) => {
                            const start = element.scrollLeft;
                            const end = start + amount;
                            const duration = 300;
                            let startTime = null;
    
                            function animation(currentTime) {
                                if (!startTime) startTime = currentTime;
                                const timeElapsed = currentTime - startTime;
                                const progress = Math.min(timeElapsed / duration, 1);
                                
                                const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                                
                                element.scrollLeft = start + (amount * ease);
                                
                                if (timeElapsed < duration) {
                                    requestAnimationFrame(animation);
                                }
                            }
                            
                            requestAnimationFrame(animation);
                        };
    
                        prevBtn.addEventListener('click', () => smoothScroll(list, -scrollAmount));
                        nextBtn.addEventListener('click', () => smoothScroll(list, scrollAmount));
                    }
                });
    
                // Otimização do dropdown de departamentos
                const dropdownMenu = document.getElementById('departamentos-dropdown');
                const icon = document.getElementById('departamentos-icon');
    
                if (dropdownMenu && icon) {
                    dropdownMenu.addEventListener('shown.bs.dropdown', () => {
                        icon.classList.replace('bi-list', 'bi-x');
                    });
    
                    dropdownMenu.addEventListener('hidden.bs.dropdown', () => {
                        icon.classList.replace('bi-x', 'bi-list');
                    });
                }
    
                // Carregamento de recursos quando necessário
                function loadNonCriticalResources() {
                    // Carregar analytics, tracking, etc. quando o usuário interagir
                }
    
                document.addEventListener('mousemove', loadNonCriticalResources, { once: true });
                document.addEventListener('touchstart', loadNonCriticalResources, { once: true });
            });
    
            // Web Vitals para monitoramento (opcional)
            if (typeof gtag !== 'undefined') {
                // Integração com Google Analytics para métricas de performance
            }
        </script>
    
    
        <!-- Menu mobile offcanvas -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
    
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="menuOffcanvasLabel">Departamentos</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
    
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <h6 class="text-primary">ELETRODOMÉSTICOS</h6>
                        <ul class="list-unstyled ms-2">
                            <li><a class="nav-link" href="#">Refrigeradores</a></li>
                            <li><a class="nav-link" href="#">Fogões</a></li>
                            <li><a class="nav-link" href="#">Lavar e Secar</a></li>
                            <li><a class="nav-link" href="#">Microondas</a></li>
                        </ul>
                    </li>
                    <li class="nav-item mt-3">
                        <h6 class="text-primary">PEÇAS E ACESSÓRIOS</h6>
                        <ul class="list-unstyled ms-2">
                            <li><a class="nav-link" href="#">Peças de reposição</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    
        <!-- Offcanvas para Login/Cadastro no Mobile -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="loginOffcanvas" aria-labelledby="loginOffcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="loginOffcanvasLabel">A sua Conta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <!-- O mesmo formulário do dropdown do desktop -->
                <form>
                    <div class="mb-3">
                        <label for="loginEmailMobile" class="form-label">Email ou CPF</label>
                        <input type="email" class="form-control" id="loginEmailMobile">
                    </div>
                    <div class="mb-3">
                        <label for="loginPasswordMobile" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="loginPasswordMobile">
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMeMobile">
                            <label class="form-check-label" for="rememberMeMobile">Lembrar-me</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Entrar</button>
                    <div class="text-center mt-3">
                        <a href="#" class="small text-decoration-none">Esqueci minha senha</a>
                    </div>
                    <hr>
                    <p class="text-center small mb-2">Ainda não tem conta?</p>
                    <a href="#" class="btn btn-outline-secondary w-100">Cadastrar</a>
                </form>
            </div>
        </div>
    
    
        <!-- Offcanvas para o Carrinho de Compras -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title fw-bold" id="cartOffcanvasLabel">
                    <img src="assets/icons/Logotipo.svg" alt="TudoBônus" style="height: 24px;" class="me-2">
                    Meu Carrinho
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <!-- Conteúdo do carrinho vai aqui -->
                <p class="text-center text-muted mt-4">Seu carrinho está vazio.</p>
            </div>
        </div>
    </body>
    
</html>
  );
}