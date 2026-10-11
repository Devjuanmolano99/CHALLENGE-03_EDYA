export function ProfileView() {
  return (
    <div className="view-content">
      <h2>👤 Perfil de Usuario</h2>
      <p>Información básica y detalles personales del usuario.</p>
      <div className="info-box">
        <p><strong>Nombre:</strong> Juan Manuel Álvarez</p>
        <p><strong>Rol:</strong> Estudiante / Desarrollador</p>
        <p><strong>Universidad:</strong> UAO - Estructuras de Datos II</p>
      </div>
    </div>
  );
}

export function MessagesView() {
  return (
    <div className="view-content">
      <h2>💬 Mensajes</h2>
      <p>Bandeja de entrada y notificaciones directas.</p>
      <ul className="simple-list">
        <li>🔔 Recordatorio: Entrega de Challenge 09 sobre Árboles N-arios</li>
        <li>📩 Mensaje de soporte: Bienvenido al sistema</li>
      </ul>
    </div>
  );
}

export function AccountView() {
  return (
    <div className="view-content">
      <h2>⚙️ Configuración de Cuenta</h2>
      <p>Gestiona los datos de acceso y preferencias generales de tu cuenta.</p>
    </div>
  );
}

export function SecurityView() {
  return (
    <div className="view-content">
      <h2>🔒 Security & Privacy</h2>
      <p>Configuración de seguridad, privacidad y autenticación en dos pasos.</p>
      <div className="info-box">
        <p>✅ Autenticación en 2 pasos: <strong>Activada</strong></p>
        <p>🛡️ Nivel de cifrado: <strong>AES-256</strong></p>
        <p>👁️ Visibilidad del perfil: <strong>Privado</strong></p>
      </div>
    </div>
  );
}

export function PasswordView() {
  return (
    <div className="view-content">
      <h2>🔑 Cambio de Contraseña</h2>
      <p>Actualiza periódicamente tu contraseña para mantener tu cuenta segura.</p>
    </div>
  );
}

export function NotificationView() {
  return (
    <div className="view-content">
      <h2>🔔 Notificaciones</h2>
      <p>Configura las alertas por correo electrónico y notificaciones push.</p>
    </div>
  );
}

export function FaqView() {
  return (
    <div className="view-content">
      <h2>❓ Preguntas Frecuentes (FAQ's)</h2>
      <p>Encuentra respuestas rápidas a las dudas más comunes sobre la plataforma.</p>
    </div>
  );
}

export function TicketView() {
  return (
    <div className="view-content">
      <h2>🎫 Enviar un Ticket de Soporte</h2>
      <p>¿Tienes algún problema? Nuestro equipo de soporte técnico te atenderá.</p>
    </div>
  );
}

export function NetworkView() {
  return (
    <div className="view-content">
      <h2>🌐 Estado de la Red</h2>
      <p>Todos los servicios y microservicios están operando normalmente (100% Uptime).</p>
    </div>
  );
}

export function LogoutView() {
  return (
    <div className="view-content">
      <h2>🚪 Cerrar Sesión</h2>
      <p>Has seleccionado cerrar sesión. Haz clic en confirmar para salir.</p>
    </div>
  );
}
