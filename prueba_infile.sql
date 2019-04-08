
SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
-- Estructura para la tabla empleados
-- ----------------------------
DROP TABLE IF EXISTS `empleados`;
CREATE TABLE `empleados`  (
  `empleado_id` int(11) NOT NULL AUTO_INCREMENT,
  `nit` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `pago_x_hora` double(255, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`empleado_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Estructura para la tabla sueldos
-- ----------------------------

DROP TABLE IF EXISTS `sueldos`;
CREATE TABLE `sueldos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empleado_id` int(11) NULL DEFAULT NULL,
  `horas_trabajadas` double(255, 0) NULL DEFAULT NULL,
  `subtotal` double(255, 0) NULL DEFAULT NULL,
  `igss` double(255, 0) NULL DEFAULT NULL,
  `total` double(255, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `empleado_id`(`empleado_id`) USING BTREE,
  CONSTRAINT `sueldos_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`empleado_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
