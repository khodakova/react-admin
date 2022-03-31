/**
 * Перенастройка дефолтного поведения Hot Module Replacement
 * для очистки консоли после каждого обновления кода
 */
if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler((status) => {
            if (status === 'prepare') console.clear();
        });
    }
}
