Package.describe({
  summary: "UserVoice provides a feedback and support widget that can be embedded on any website."
});

Package.on_use(function (api) {
  api.use('standard-app-packages', 'client');
  api.add_files('uservoice-client.js', 'client');
});

Package.on_test(function (api) {
  api.add_files('uservoice-client.js');
  // api.add_files('uservoice-client_tests.js', 'client');
});