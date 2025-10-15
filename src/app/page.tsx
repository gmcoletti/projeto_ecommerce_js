'use client';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="tudobonus-home">
      {/* CSS crítico inline para melhor performance */}
      <style jsx>{`
        .tudobonus-home {
          min-height: 100vh;
        }
        
        /* Otimizações de carregamento */
        img {
          max-width: 100%;
          height: auto;
          loading: lazy;
        }
        
        .carousel-hero-img {
          width: 100%;
          object-fit: cover;
        }
        
        /* Containment para melhor performance */
        .carousel, .modal, .offcanvas { 
          contain: layout style paint; 
        }
        
        /* Melhoria na renderização */
        * {
          box-sizing: border-box;
        }
      `}</style>

      <header>
        <nav>
          <p className="text-center h8 bg-primary text-white p-2">
            GANHE 10% DE DESCONTO PAGANDO NO PIX COM O PAGUE NA ENTREGA
          </p>

          {/* Top bar - desktop only */}
          <div className="py-2 bg-secondary d-none d-md-block">
            <div className="container">
              <div className="text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between w-100 text-center">
                <span className="top-bar-highlight flex-grow-1">
                  Pague somente na <strong>Entrega via PIX</strong>
                </span>
                <a href="#" className="top-bar-item text-decoration-none flex-grow-1 text-md-end">
                  Precisa de ajuda?
                </a>
                <a href="#" className="top-bar-item text-decoration-none flex-grow-1 text-center">
                  Dúvidas frequentes
                </a>
                <a href="#" className="top-bar-item text-decoration-none flex-grow-1 text-md-start">
                  TudoBônus – Empresas
                </a>
                <span className="top-bar-highlight fw-bold flex-grow-1 text-md-end">
                  <strong>Televendas</strong>
                  <span className="fw-normal">(19) 4101-0001</span>
                </span>
              </div>
            </div>
          </div>

          {/* Logo, busca e usuário */}
          <div className="py-4">
            <div className="container">
              {/* Mobile header */}
              <div className="row align-items-center justify-content-between d-md-none mb-3">
                <div className="col-auto">
                  <button className="btn border-0 p-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
                    <i className="bi bi-list custom-icon-menu"></i>
                  </button>
                </div>
                <div className="col text-center">
                  <a href="dashboard.html">
                    <Image 
                      src="/assets/icons/Logotipo.svg" 
                      alt="TudoBônus"
                      width={150}
                      height={40}
                      priority // Prioriza carregamento da logo
                    />
                  </a>
                </div>
                <div className="col-auto d-flex gap-3">
                  <a href="#" id="mobileUserIcon" data-bs-toggle="offcanvas" data-bs-target="#loginOffcanvas">
                    <i className="bi bi-person text-primary fs-4"></i>
                  </a>
                  <i className="bi bi-cart text-primary fs-4"></i>
                </div>
              </div>

              {/* Desktop header */}
              <div className="row align-items-center d-none d-md-flex">
                <div className="col-md-auto">
                  <a href="dashboard.html">
                    <Image 
                      src="/assets/icons/Logotipo.svg" 
                      alt="TudoBônus"
                      width={180}
                      height={50}
                      priority
                    />
                  </a>
                </div>

                <div className="col">
                  <form role="search">
                    <div className="position-relative search-box-custom">
                      <input 
                        type="text" 
                        className="form-control square-input"
                        placeholder="QUAL PRODUTO VOCÊ ESTÁ PROCURANDO?" 
                      />
                      <button type="submit"
                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom">
                        <i className="bi bi-search fs-4"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-auto text-end d-flex align-items-center">
                  <div className="dropdown">
                    <a href="#" className="d-flex align-items-center gap-2 text-decoration-none"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person text-primary fs-2"></i>
                      <div className="small text-primary text-start">
                        Olá! Entre ou<br />
                        <span className="text-primary fw-semibold">crie a sua conta <i
                            className="bi bi-chevron-down"></i></span>
                      </div>
                    </a>
                    <div className="dropdown-menu p-4 login-dropdown">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="loginEmail" className="form-label">Email ou CPF</label>
                          <input type="email" className="form-control" id="loginEmail" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="loginPassword" className="form-label">Senha</label>
                          <input type="password" className="form-control" id="loginPassword" />
                        </div>
                        <div className="mb-3">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Lembrar-me</label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Entrar</button>
                        <div className="text-center mt-3">
                          <a href="#" className="small text-decoration-none">Esqueci minha senha</a>
                        </div>
                        <hr />
                        <p className="text-center small mb-2">Ainda não tem conta?</p>
                        <a href="#" className="btn btn-outline-secondary w-100">Cadastrar</a>
                      </form>
                    </div>
                  </div>
                  <a href="#" className="text-primary fs-3 ms-4"><i className="bi bi-cart"></i></a>
                </div>
              </div>

              {/* Mobile search */}
              <div className="row d-md-none">
                <div className="col-12">
                  <form role="search">
                    <div className="position-relative search-box-custom mt-2">
                      <input 
                        type="text" 
                        className="form-control square-input"
                        placeholder="QUAL PRODUTO VOCÊ ESTÁ PROCURANDO?" 
                      />
                      <button type="submit"
                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom"
                        tabIndex={-1}>
                        <i className="bi bi-search fs-4"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Menu departamentos - desktop only */}
          <div className="py-3 bg-tertiary d-none d-md-block">
            <div className="container">
              <div className="col-12">
                <div className="d-flex align-items-center flex-nowrap justify-content-between gap-2">
                  <div className="dropdown" id="departamentos-dropdown">
                    <button
                      className="rounded-pill px-3 px-md-4 fw-semibold d-flex align-items-center bg-white border-0"
                      type="button" id="departamentos-btn" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="bi bi-list me-1 custom-icon-menu" id="departamentos-icon"></i>
                      <span className="menu-link p-0">DEPARTAMENTOS</span>
                    </button>
                    <div className="dropdown-menu mega-menu p-4">
                      <div className="row">
                        <div className="col-md-3">
                          <p className="text-primary fw-bold h6">ELETRODOMÉSTICOS</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Refrigeradores</a></li>
                            <li><a className="dropdown-item" href="#">Fogões</a></li>
                            <li><a className="dropdown-item" href="#">Lavar e Secar</a></li>
                            <li><a className="dropdown-item" href="#">Microondas</a></li>
                          </ul>
                          <p className="text-primary fw-bold mt-3 h6">PEÇAS E ACESSÓRIOS</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Peças de reposição</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p className="text-uppercase fw-bold h6">Geladeira</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Todas as geladeiras</a></li>
                            <li><a className="dropdown-item" href="#">Brastemp</a></li>
                            <li><a className="dropdown-item" href="#">Consul</a></li>
                          </ul>
                          <p className="text-uppercase fw-bold mt-3 h6">Freezer</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Todos os freezers</a></li>
                            <li><a className="dropdown-item" href="#">Horizontal</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p className="text-uppercase fw-bold h6">Frigobar</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Todos os frigobares</a></li>
                            <li><a className="dropdown-item" href="#">Consul</a></li>
                          </ul>
                          <p className="text-uppercase fw-bold mt-3 h6">Cervejeira</p>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Todas as cervejeiras</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="categoria.html" className="menu-link p-0">ELETRODOMÉSTICOS</a>
                  <a href="#" className="menu-link p-0">MAIS VENDIDOS</a>
                  <a href="#" className="menu-link p-0">OFERTAS IMPECÁVEIS</a>
                  <a href="#" className="menu-link p-0">MELHORES OPORTUNIDADES</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Carousel Section */}
        <section className="container-fluid px-0">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators d-flex">
              <div className="d-flex custom-icon-carousel">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active" aria-current="true" aria-label="Slide 1">
                  <i className="bi bi-circle-fill"></i>
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2">
                  <i className="bi bi-circle-fill"></i>
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3">
                  <i className="bi bi-circle-fill"></i>
                </button>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image 
                  src="/assets/banner1.png" 
                  alt="Promoção TudoBônus"
                  width={1200}
                  height={400}
                  className="d-none d-md-block w-100 carousel-hero-img"
                  priority
                />
                <Image 
                  src="/assets/bannerMobile1.png" 
                  alt="Promoção TudoBônus"
                  width={600}
                  height={300}
                  className="d-block d-md-none w-100 carousel-hero-img img-fluid"
                  priority
                />
              </div>
              {/* Adicione mais carousel items conforme necessário */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <Image 
                src="/assets/icons/Arrowleft-circle.svg" 
                alt="Anterior"
                width={40}
                height={40}
              />
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <Image 
                src="/assets/icons/Arrowright-circle.svg" 
                alt="Próximo"
                width={40}
                height={40}
              />
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </section>

        {/* Continue com as outras seções do seu código... */}
        {/* Section Regua, Oportunidades, Classificação, etc. */}

      </main>

      {/* Footer e Offcanvases permanecem iguais, mas otimizados com Next.js Image */}

      {/* Scripts otimizados */}
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        async // Carrega de forma assíncrona
      />
      
      {/* Script do dropdown otimizado */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const dropdownMenu = document.getElementById('departamentos-dropdown');
              const icon = document.getElementById('departamentos-icon');
              
              if (dropdownMenu && icon) {
                dropdownMenu.addEventListener('shown.bs.dropdown', () => {
                  icon.classList.remove('bi-list');
                  icon.classList.add('bi-x');
                });
                
                dropdownMenu.addEventListener('hidden.bs.dropdown', () => {
                  icon.classList.remove('bi-x');
                  icon.classList.add('bi-list');
                });
              }
              
              // Lazy loading para imagens não críticas
              const images = document.querySelectorAll('img[data-src]');
              const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                  }
                });
              });
              
              images.forEach(img => imageObserver.observe(img));
            });
          `
        }}
      />
    </div>
  );
}