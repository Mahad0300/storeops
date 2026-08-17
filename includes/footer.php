        </main>
      </div>
    </div>

    <!-- Toast Notification Popup Container -->
    <div id="toastContainer" class="toast-container"></div>

    <!-- Shared Application Core Logic JS -->
    <script src="js/common.js"></script>
    <?php if (isset($pageScript) && !empty($pageScript)): ?>
      <script src="js/<?php echo htmlspecialchars($pageScript); ?>.js"></script>
    <?php endif; ?>
  </body>
</html>
