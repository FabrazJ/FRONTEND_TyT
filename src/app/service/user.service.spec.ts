import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa el módulo de pruebas HTTP
import { UserService } from './user.service';  // Asegúrate de que la ruta sea correcta

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  // Agrega el módulo de pruebas HTTP
    });
    service = TestBed.inject(UserService);  // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica que el servicio sea creado correctamente
  });
});
