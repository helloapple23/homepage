(() => {
  const stage = document.getElementById('room-stage');
  const avatar = document.getElementById('avatar');
  const tooltip = document.getElementById('room-tooltip');
  const status = document.getElementById('interaction-status');

  if (!stage || !avatar || !tooltip) return;

  const base = { width: 860, height: 540 };
  const state = {
    x: 430,
    y: 392,
    speed: 2.55,
    keys: new Set(),
    nearest: null
  };

  const objects = Array.from(stage.querySelectorAll('[data-room-target]')).map((element) => ({
    element,
    label: element.dataset.label || 'page',
    href: element.getAttribute('href'),
    x: Number(element.dataset.x || 0),
    y: Number(element.dataset.y || 0)
  }));

  const directions = {
    ArrowUp: 'up',
    KeyW: 'up',
    ArrowDown: 'down',
    KeyS: 'down',
    ArrowLeft: 'left',
    KeyA: 'left',
    ArrowRight: 'right',
    KeyD: 'right'
  };

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function toPercent(value, max) {
    return `${(value / max) * 100}%`;
  }

  function setAvatarPosition() {
    avatar.style.left = toPercent(state.x, base.width);
    avatar.style.top = toPercent(state.y, base.height);
  }

  function setTooltip(target) {
    if (!target) {
      tooltip.hidden = true;
      if (status) status.textContent = 'Move near an object to open a page.';
      return;
    }

    tooltip.hidden = false;
    tooltip.textContent = `Press E to open ${target.label}`;
    tooltip.style.left = toPercent(state.x, base.width);
    tooltip.style.top = toPercent(state.y - 78, base.height);
    if (status) status.textContent = `Nearby: ${target.label}. Press E or tap the object.`;
  }

  function updateNearest() {
    let nearest = null;
    let nearestDistance = Infinity;

    for (const object of objects) {
      const currentDistance = distance(state, object);
      object.element.classList.remove('is-near');
      if (currentDistance < nearestDistance) {
        nearest = object;
        nearestDistance = currentDistance;
      }
    }

    if (nearest && nearestDistance < 92) {
      nearest.element.classList.add('is-near');
      state.nearest = nearest;
      setTooltip(nearest);
    } else {
      state.nearest = null;
      setTooltip(null);
    }
  }

  function openNearest() {
    if (state.nearest && state.nearest.href) {
      window.location.href = state.nearest.href;
    }
  }

  function tick() {
    let dx = 0;
    let dy = 0;

    if (state.keys.has('up')) dy -= state.speed;
    if (state.keys.has('down')) dy += state.speed;
    if (state.keys.has('left')) dx -= state.speed;
    if (state.keys.has('right')) dx += state.speed;

    if (dx && dy) {
      dx *= 0.72;
      dy *= 0.72;
    }

    if (dx || dy) {
      state.x = clamp(state.x + dx, 90, 770);
      state.y = clamp(state.y + dy, 170, 500);
      setAvatarPosition();
      updateNearest();
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener('keydown', (event) => {
    const active = document.activeElement;
    const isTyping = active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName);
    const isRoomMode = active === document.body || active === stage;
    const direction = directions[event.code];

    if (direction && !isTyping && isRoomMode) {
      state.keys.add(direction);
      stage.focus({ preventScroll: true });
      event.preventDefault();
    }

    if ((event.code === 'KeyE' || event.code === 'Enter') && active === stage) {
      openNearest();
      event.preventDefault();
    }
  });

  window.addEventListener('keyup', (event) => {
    const active = document.activeElement;
    const isRoomMode = active === document.body || active === stage;
    const direction = directions[event.code];
    if (direction && isRoomMode) {
      state.keys.delete(direction);
      event.preventDefault();
    }
  });

  stage.addEventListener('click', () => {
    stage.focus({ preventScroll: true });
  });

  document.querySelectorAll('[data-move]').forEach((button) => {
    const direction = button.dataset.move;
    const start = (event) => {
      event.preventDefault();
      state.keys.add(direction);
      stage.focus({ preventScroll: true });
    };
    const stop = () => state.keys.delete(direction);

    button.addEventListener('pointerdown', start);
    button.addEventListener('pointerup', stop);
    button.addEventListener('pointerleave', stop);
    button.addEventListener('pointercancel', stop);
  });

  document.querySelectorAll('[data-action="interact"]').forEach((button) => {
    button.addEventListener('click', openNearest);
  });

  setAvatarPosition();
  updateNearest();
  requestAnimationFrame(tick);
})();
