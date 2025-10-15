'use client';

import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <nav>
        <p className="text-center h8 bg-primary text-white p-2">
          GANHE 10% DE DESCONTO PAGANDO NO PIX COM O PAGUE NA ENTREGA
        </p>

        {/* Top Bar - Desktop */}
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

        {/* Logo e Busca */}
        <div className="py-4">
          <div className="container">
            {/* Mobile Header */}
            <div className="row align-items-center justify-content-between d-md-none mb-3">
              <div className="col-auto">
                <button 
                  className="btn border-0 p-0" 
                  type="button" 
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#menuOffcanvas"
                >
                  <i className="bi bi-list custom-icon-menu"></i>
                </button>
              </div>
              <div className="col text-center">
                <a href="/">
                  <img 
                    src="/assets/icons/Logotipo.svg" 
                    alt="TudoBônus" 
                    className="img-fluid"
                    width={150}
                    height={40}
                  />
                </a>
              </div>
              <div className="col-auto d-flex gap-3">
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#loginOffcanvas">
                  <i className="bi bi-person text-primary fs-4"></i>
                </a>
                <i className="bi bi-cart text-primary fs-4"></i>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="row align-items-center d-none d-md-flex">
              <div className="col-md-auto">
                <a href="/">
                  <img 
                    src="/assets/icons/Logotipo.svg" 
                    alt="TudoBônus" 
                    width={180}
                    height={50}
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
                    <button 
                      type="submit"
                      className="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom"
                    >
                      <i className="bi bi-search fs-4"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-auto text-end d-flex align-items-center">
                <div className="dropdown">
                  <a 
                    href="#" 
                    className="d-flex align-items-center gap-2 text-decoration-none"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-person text-primary fs-2"></i>
                    <div className="small text-primary text-start">
                      Olá! Entre ou<br />
                      <span className="text-primary fw-semibold">
                        crie a sua conta <i className="bi bi-chevron-down"></i>
                      </span>
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
                          <label className="form-check-label" htmlFor="rememberMe">
                            Lembrar-me
                          </label>
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
                <a href="#" className="text-primary fs-3 ms-4">
                  <i className="bi bi-cart"></i>
                </a>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="row d-md-none">
              <div className="col-12">
                <form role="search">
                  <div className="position-relative search-box-custom mt-2">
                    <input 
                      type="text" 
                      className="form-control square-input"
                      placeholder="QUAL PRODUTO VOCÊ ESTÁ PROCURANDO?" 
                    />
                    <button 
                      type="submit"
                      className="btn btn-link position-absolute top-50 end-0 translate-middle-y px-0 py-0 me-3 search-btn-custom"
                    >
                      <i className="bi bi-search fs-4"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Departamentos - Desktop */}
        <div className="py-3 bg-tertiary d-none d-md-block">
          <div className="container">
            <div className="col-12">
              <div className="d-flex align-items-center flex-nowrap justify-content-between gap-2">
                <div className="dropdown" id="departamentos-dropdown">
                  <button
                    className="rounded-pill px-3 px-md-4 fw-semibold d-flex align-items-center bg-white border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
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

                <a href="/categoria" className="menu-link p-0">ELETRODOMÉSTICOS</a>
                <a href="#" className="menu-link p-0">MAIS VENDIDOS</a>
                <a href="#" className="menu-link p-0">OFERTAS IMPECÁVEIS</a>
                <a href="#" className="menu-link p-0">MELHORES OPORTUNIDADES</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}